import { useQuery } from '@tanstack/vue-query';
import { useApolloClient, useMutation } from '@vue/apollo-composable';
import type { Maybe } from 'graphql/jsutils/Maybe';
import type { FormInst, FormItemRule } from 'naive-ui';
import type { GetUserQuery, UserResponseGet } from '~/graphql/apis/graphql';
import { GetUserDocument } from '~/graphql/apis/graphql';
import { defineLocalStore } from '~/plugins/storeManager';

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

  const { isLoading, error, refetch } = useQuery({
    queryKey: ['userDetail', route.params.id],
    queryFn: async () => {
      const { data } = await client.query<GetUserQuery>({
        query: GetUserDocument,
        variables: {
          userId: Number(route.params.id),
        },
      });
      if (data.getUser) {
        detailData.value = data.getUser;
        majorForm.setFormModel(data.getUser);
      }

      return data.getUser || [];
    },
  });

  onMounted(() => {
    refetch();
  });

  function goList() {
    router.push('/user');
  }

  function deleteUser() {
    console.log('deleteUser');
  }
  function toggleEditMode() {
    editMode.value = !editMode.value;
  }

  return {
    detailData,
    isLoading,
    error,
    editMode,
    refetch,
    goList,
    deleteUser,
    toggleEditMode,
  };
}

function defMajorFormStore() {
  const { client } = useApolloClient();

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
      required: true,
      message: '',
      trigger: ['input'],
      validator: (rule: FormItemRule, value: string) => {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
      },
    },
    phoneNumber: {
      required: true,
      message: '올바른 휴대폰 번호를 입력해주세요.',
      trigger: ['input'],
      validator: (rule: FormItemRule, value: string) => {
        return /^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/.test(value);
      },
    },
  });
  const formItemClass = {
    labelClass: 'detail-form-label',
    feedbackClass: 'detail-form-feedback',
  };

  // const { isLoading, error, refetch } = useMutation({
  //   mutationFn: async () => {
  //     const { data } = await client.mutate<Modify>({
  //       mutation: UpdateUserDocument,
  //     });
  //   },
  // });

  function onSubmit(e: Event) {
    e.preventDefault();

    formRef.value?.validate((errors) => {
      if (errors) {
        console.error(errors);
        return;
      }
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
  return {
    formRef,
    formModel,
    rules,
    formItemClass,
    onSubmit,
    setFormModel,
  };
}
