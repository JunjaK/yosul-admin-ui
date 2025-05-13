import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query';
import { useApolloClient } from '@vue/apollo-composable';
import dayjs from 'dayjs';
import type { FormInst, FormItemRule } from 'naive-ui';
import { ModifyTastingNoteDocument, GetTastingNoteDetailDocument, DeleteTastingNoteDocument } from '~/graphql/apis/graphql';
import type { DeleteTastingNoteMutation, GetTastingNoteDetailQuery, ModifyTastingNoteMutation, TastingNote } from '~/graphql/apis/graphql';
import { defineLocalStore } from '~/plugins/storeManager';
// import { useLocalDialog, useLocalMessage } from '~/composables/naiveUI';

interface MajorForm {
  title?: string;
  review?: string;
}

export default function main() {
  const majorDetail = useMajorDetailStore();
  const majorForm = useMajorFormStore();

  return {
    majorDetail,
    majorForm,
  };
}

export function getImageUrl(imageName: string) {
  console.log(`${import.meta.env.VITE_API_URL}${imageName}`);

  return `${import.meta.env.VITE_API_URL}${imageName}`;
}

export const useMajorDetailStore = defineLocalStore(defMajorDetailStore);
export const useMajorFormStore = defineLocalStore(defMajorFormStore);

function defMajorDetailStore() {
  const router = useRouter();
  const route = useRoute();
  const { client } = useApolloClient();

  const majorForm = useMajorFormStore();

  const editMode = ref(false);
  const detailData = ref<TastingNote>({
    tastingNoteId: '',
  });
  const dataUpdated = ref(false);

  const tastingNoteId = computed(() => Number(route.params.id));

  const getDateFormat = (date?: string | null) => {
    if (!date) return '';
    return dayjs(date).format('YYYY-MM-DD'); ;
  };

  const { isLoading, error, refetch } = useQuery({
    queryKey: ['tastingNote', 'detail', { tastingNoteId }],
    queryFn: async () => {
      if (!tastingNoteId) return null;

      const { data } = await client.query<GetTastingNoteDetailQuery>({
        query: GetTastingNoteDetailDocument,
        variables: {
          tastingNoteId: tastingNoteId.value,
        },
      });

      dataUpdated.value = false;

      if (data.getTastingNoteForAdmin) {
        detailData.value = data.getTastingNoteForAdmin;
        majorForm.setFormModel(data.getTastingNoteForAdmin);
      }

      return data.getTastingNoteForAdmin || [];
    },
    staleTime: 0,
  });

  function goList() {
    router.push('/tasting-note');
  }

  function setDetailData(data: TastingNote) {
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

  const formRef = ref<FormInst | null>(null);
  const formModel = ref<MajorForm>({
    title: '',
    review: '',
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

  const { mutate: modifyTastingNote, isPending: modifyTastingNoteLoading, isError: modifyTastingNoteError } = useMutation({
    mutationKey: ['tastingNote', 'modify'],
    mutationFn: async () => {
      const { data } = await client.mutate<ModifyTastingNoteMutation>({
        mutation: ModifyTastingNoteDocument,
        variables: {
          tastingNote: {
            tastingNoteId: Number(majorDetail.detailData.tastingNoteId),
            title: formModel.value.title,
            review: formModel.value.review,
            alcoholId: Number(majorDetail.detailData.alcoholId),
            drinkDate: majorDetail.detailData.drinkDate,
            rating: majorDetail.detailData.rating,
          },
        },
      });

      return data?.tnModify || null;
    },
    async onSuccess(data) {
      if (data) {
        majorDetail.toggleEditMode();
        message.success('수정되었습니다.');

        queryClient.invalidateQueries({ queryKey: ['tastingNote'], exact: false, refetchType: 'all' });
      }
    },
  });
  const { mutate: deleteTastingNote, isPending: deleteTastingNoteLoading, isError: deleteTastingNoteError } = useMutation({
    mutationKey: ['tastingNote', 'delete'],
    mutationFn: async () => {
      await client.mutate<DeleteTastingNoteMutation>({
        mutation: DeleteTastingNoteDocument,
        variables: {
          tastingNoteId: Number(majorDetail.detailData.tastingNoteId),
        },
      });
    },
    onSuccess() {
      message.warning('삭제되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['tastingNote', 'list'], exact: false, refetchType: 'all' });
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

      modifyTastingNote();
    });
  }

  function setFormModel(data: TastingNote) {
    formModel.value = {
      title: data.title ?? '',
      review: data.review ?? '',
    };
  }
  function checkDeleteTastingNote() {
    dialog.warning({
      title: '테이스팅 노트 삭제',
      content: `'${majorDetail.detailData.title}'를 정말로 삭제하시겠습니까?`,
      positiveText: '삭제',
      negativeText: '취소',
      onPositiveClick: () => {
        deleteTastingNote();
      },
    });
  }

  return {
    formRef,
    formModel,
    rules,
    formItemClass,
    modifyTastingNoteError,
    modifyTastingNoteLoading,
    modifyTastingNote,
    onSubmit,
    setFormModel,
    checkDeleteTastingNote,
    deleteTastingNoteLoading,
    deleteTastingNoteError,
  };
}
