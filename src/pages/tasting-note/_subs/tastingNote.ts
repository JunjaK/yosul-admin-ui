import { ref } from 'vue';
import type { FormInst, FormItemRule, DataTableColumns, DataTableRowKey, PaginationProps } from 'naive-ui';
import { useQuery } from '@tanstack/vue-query';
import { useApolloClient } from '@vue/apollo-composable';
import dayjs from 'dayjs';
import type { GetTastingNoteListQuery, TastingNote, GetTastingNoteListQueryVariables } from '~/graphql/apis/graphql';
import { GetTastingNoteListDocument, GetUserListDocument } from '~/graphql/apis/graphql';
import { defineManualStore } from '~/plugins/storeManager';

interface MajorForm {
  searchValue?: string;
  searchType: 'nickname' | 'username' | 'userId';
  createdAt: [number, number] | null;
}

export interface TastingNoteRowData {
  no?: string;
  tastingNoteId?: number | null;
  alcoholName?: string;
  title?: boolean;
  rating: string;
  views?: string;
  commentCount?: string;
  likeCount?: string;
  userNickName?: string;
  createAt?: string;
  updatedAt?: string;
}

type OmitPageTastingNoteListQueryVariables = Omit<GetTastingNoteListQueryVariables, 'pageNum' | 'perPage'>;

const inputOptions = [
  {
    label: '주류',
    value: 'alcohol',
  },
  {
    label: '닉네임',
    value: 'nickname',
  },
  {
    label: '제목',
    value: 'title',
  },
];

export default function main() {
  const majorForm = useMajorFormStore();
  const majorList = useMajorListStore();

  return {
    majorForm,
    majorList,
  };
}

export const useMajorFormStore = defineManualStore(defMajorFormStore, 'tastingNoteMajorForm');
export const useMajorListStore = defineManualStore(defMajorListStore, 'tastingNoteMajorList');

function defMajorFormStore() {
  const formRef = ref<FormInst | null>(null);
  const formModel = ref<MajorForm>({
    searchType: 'title',
    searchValue: '',
    createdAt: null,
  });
  const rules = ref<Record<string, FormItemRule>>({});
  const majorList = useMajorListStore();

  function onSubmit(e: Event) {
    e.preventDefault();

    formRef.value?.validate((errors) => {
      if (errors) {
        console.error(errors);
        return;
      }

      majorList.updateSearchParams(formModel.value);
      majorList.refetch();
    });
  }
  function onReset() {
    formModel.value = {
      searchType: 'nickname',
      searchValue: '',
      createdAt: null,
    };
    majorList.updateSearchParams(formModel.value);
    majorList.refetch();
  }

  return {
    formRef,
    formModel,
    rules,
    inputOptions,
    onSubmit,
    onReset,
  };
}

function defMajorListStore() {
  const router = useRouter();
  const { client } = useApolloClient();
  const dataList = ref<TastingNote[]>([]);
  const checkedRowKeysRef = ref<DataTableRowKey[]>([]);

  const dataColumns: DataTableColumns<TastingNoteRowData> = [
    {
      type: 'selection',
    },
    {
      key: 'no',
      title: 'No.',
      width: 100,
      align: 'center',
    },
    {
      key: 'alcoholName',
      title: '주류',
      width: 100,
      align: 'center',
    },
    {
      key: 'title',
      title: '제목',
      render(row) {
        return h('a', {
          style: {
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'underline',
            cursor: 'pointer',
          },
          onClick: () => {
            router.push(`/tasting-note/${row.tastingNoteId}`);
          },
        }, [row.title]);
      },
      width: '30%',
    },
    {
      key: 'rating',
      title: '별점',
      width: 80,
      align: 'center',
    },

    {
      key: 'views',
      title: '조회수',
      width: 80,
      align: 'center',
    },
    // {
    //   key: 'likeCount',
    //   title: '좋아요수',
    //   width: 80,
    //   align: 'center',
    // },
    {
      key: 'commentCount',
      title: '댓글수',
      width: 80,
      align: 'center',
    },
    {
      key: 'userNickName',
      title: '작성자',
      width: 150,
      align: 'center',
    },
    {
      key: 'createdAt',
      title: '작성일시',
      width: 180,
      align: 'center',

    },
    // {
    //   key: 'updatedAt',
    //   title: '수정일시',
    //   width: 180,
    //   align: 'center',
    // },
  ];

  const searchParams = ref<OmitPageTastingNoteListQueryVariables>({
    nickname: '',
    createdAfter: '',
    createdBefore: '',
  });

  const pagination = reactive<PaginationProps>({
    page: 1,
    pageSize: 10,
    itemCount: 0,
    onUpdatePage(page) {
      pagination.page = page;
      refetch();
    },
  });

  const { isLoading, error, refetch } = useQuery({
    queryKey: ['tastingNote', 'list', pagination.page, pagination.pageSize, searchParams.value],
    queryFn: async () => {
      const { data } = await client.query<GetTastingNoteListQuery>({
        query: GetTastingNoteListDocument,
        variables: {
          ...searchParams.value,
          pageNum: pagination.page,
          perPage: pagination.pageSize,
        },
      });
      pagination.itemCount = data.getTastingNotesForAdmin?.totalCount || 0;

      dataList.value = data.getTastingNotesForAdmin?.data?.map((e, idx) => {
        // 전체 아이템 수에서 현재 페이지의 위치를 고려하여 번호 계산
        const totalCount = data.getTastingNotesForAdmin?.totalCount || 0;
        const no = totalCount - ((pagination.page! - 1) * pagination.pageSize! + idx);

        return {
          no: String(no), // no를 문자열로 변환
          tastingNoteId: e?.tastingNoteId,
          alcoholName: e?.alcoholName,
          title: e?.title,
          rating: e?.rating,
          userNickName: e?.userNickName,
          commentCount: e?.commentCount,
          likeCount: e?.likeCount,
          createdAt: dayjs(e?.createdAt).format('YYYY-MM-DD HH:mm:ss'),
        };
      }) || [];

      return data.getTastingNotesForAdmin || [];
    },
  });

  function updateSearchParams(form: MajorForm) {
    const createdDates = form.createdAt
      ? {
          createdAfter: dayjs(form.createdAt[0]).format('YYYY-MM-DD'),
          createdBefore: dayjs(form.createdAt[1]).format('YYYY-MM-DD'),
        }
      : {
          createdAfter: '',
          createdBefore: '',
        };

    searchParams.value = {
      ...createdDates,
      [form.searchType]: form.searchValue || '',
    };
    pagination.page = 1;
  }

  function handleCheck(keys: DataTableRowKey[]) {
    checkedRowKeysRef.value = keys;
  }

  return {
    dataList,
    isLoading,
    error,
    pagination,
    dataColumns,
    checkedRowKeysRef,
    refetch,
    updateSearchParams,
    handleCheck,
  };
}
