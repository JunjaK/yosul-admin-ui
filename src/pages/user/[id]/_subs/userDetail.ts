import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query';
import { useApolloClient } from '@vue/apollo-composable';
import dayjs from 'dayjs';
import type { Maybe } from 'graphql/jsutils/Maybe';
import type { FormInst, FormItemRule } from 'naive-ui';
import { useMajorListStore } from '../../_subs/user';
import { ModifyUserDocument, GetUserDocument, DeleteUserDocument } from '~/graphql/apis/graphql';
import type { DeleteUserMutation, GetUserQuery, ModifyUserMutation, UserResponseGet } from '~/graphql/apis/graphql';
import { defineLocalStore } from '~/plugins/storeManager';
// import { useLocalDialog, useLocalMessage } from '~/composables/naiveUI';

interface MajorForm {
  nickname?: Maybe<string>;
  email?: Maybe<string>;
  phoneNumber?: Maybe<string>;
  birthday?: Maybe<string>;
}

export default function main() {
  const majorDetail = useMajorDetailStore();
  const majorForm = useMajorFormStore();

  return {
    majorDetail,
    majorForm,
  };
}

export const useMajorDetailStore = defineLocalStore(defMajorDetailStore);
export const useMajorFormStore = defineLocalStore(defMajorFormStore);

function defMajorDetailStore() {
  const router = useRouter();
  const route = useRoute();
  const { client } = useApolloClient();

  const majorForm = useMajorFormStore();

  const editMode = ref(false);
  const detailData = ref<UserResponseGet>({
    userId: '',
    loginId: '',
  });
  const dataUpdated = ref(false);

  const userId = computed(() => Number(route.params.id));

  const getDateFormat = (date?: string | null) => {
    if (!date) return '';
    return dayjs(date).format('YYYY-MM-DD'); ;
  };

  const { isLoading, error, refetch } = useQuery({
    queryKey: ['user', 'detail', { userId }], // computed 값 사용
    queryFn: async () => {
      if (!userId) return null;

      const { data } = await client.query<GetUserQuery>({
        query: GetUserDocument,
        variables: {
          userId: userId.value,
        },
      });

      dataUpdated.value = false;

      if (data.getUser) {
        detailData.value = data.getUser;
        majorForm.setFormModel(data.getUser);
      }

      return data.getUser || [];
    },
    staleTime: 0,
  });

  function goList() {
    router.push('/user');
  }

  function setDetailData(data: UserResponseGet) {
    detailData.value = data;
  }
  function toggleEditMode() {
    editMode.value = !editMode.value;
  }

  return {
    detailData,
    isLoading,
    error,
    editMode,
    dataUpdated,
    getDateFormat,
    refetch,
    goList,
    toggleEditMode,
    setDetailData,
  };
}

function defMajorFormStore() {
  const { client } = useApolloClient();
  const queryClient = useQueryClient(); // 쿼리 클라이언트 추가
  const message = useLocalMessage();
  const dialog = useLocalDialog();

  const majorDetail = useMajorDetailStore();
  const majorList = useMajorListStore();

  const formRef = ref<FormInst | null>(null);
  const formModel = ref<MajorForm>({
    nickname: '',
    email: '',
    phoneNumber: '',
    birthday: '',
  });
  const rules = ref<Record<string, FormItemRule>>({
    nickname: {
      required: true,
      message: '닉네임을 입력해주세요.',
    },
    email: {
      message: '',
      trigger: ['input'],
      validator: (rule: FormItemRule, value: string) => {
        if (value == null || value === '') {
          return true;
        }
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
      },
    },
    phoneNumber: {
      message: '올바른 휴대폰 번호를 입력해주세요.',
      trigger: ['input'],
      validator: (rule: FormItemRule, value: string) => {
        if (value == null || value === '') {
          return true;
        }
        return /^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/.test(value);
      },
    },
  });
  const formItemClass = {
    labelClass: 'detail-form-label',
    feedbackClass: 'detail-form-feedback',
  };

  const { mutate: modifyUser, isPending: modifyUserLoading, isError: modifyUserError } = useMutation({
    mutationKey: ['user', 'modify'],
    mutationFn: async () => {
      const { data } = await client.mutate<ModifyUserMutation>({
        mutation: ModifyUserDocument,
        variables: {
          id: Number(majorDetail.detailData.userId),
          nickname: formModel.value.nickname,
          email: formModel.value.email,
          phoneNumber: formModel.value.phoneNumber,
          birthday: formModel.value.birthday,
        },
      });

      return data?.userModify || null;
    },
    async onSuccess(data) {
      if (data) {
        majorDetail.toggleEditMode();
        message.success('수정되었습니다.');

        queryClient.invalidateQueries({ queryKey: ['user'], exact: false, refetchType: 'all' });
      }
    },
  });
  const { mutate: deleteUser, isPending: deleteUserLoading, isError: deleteUserError } = useMutation({
    mutationKey: ['user', 'delete'],
    mutationFn: async () => {
      await client.mutate<DeleteUserMutation>({
        mutation: DeleteUserDocument,
        variables: {
          id: Number(majorDetail.detailData.userId),
        },
      });
    },
    onSuccess() {
      message.warning('삭제되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['user', 'list'], exact: false, refetchType: 'all' });
      majorDetail.goList();
    },
  });

  function onSubmit(e: Event) {
    e.preventDefault();

    formRef.value?.validate((errors) => {
      if (errors) {
        console.error(errors);
        return;
      }

      modifyUser();
    });
  }

  function setFormModel(data: UserResponseGet) {
    formModel.value = {
      nickname: data.nickname,
      email: data.email,
      phoneNumber: data.phoneNumber,
      birthday: data.birthday,
    };
  }
  function checkDeleteUser() {
    dialog.warning({
      title: '회원 삭제',
      content: `'${majorDetail.detailData.nickname}'님을 정말로 삭제하시겠습니까?`,
      positiveText: '삭제',
      negativeText: '취소',
      onPositiveClick: () => {
        deleteUser();
      },
    });
  }

  return {
    formRef,
    formModel,
    rules,
    formItemClass,
    modifyUserError,
    modifyUserLoading,
    modifyUser,
    onSubmit,
    setFormModel,
    checkDeleteUser,
    deleteUserLoading,
    deleteUserError,
  };
}
