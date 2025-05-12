import { ref } from 'vue';
import type { FormInst, FormItemRule, DataTableColumns, DataTableRowKey, PaginationProps } from 'naive-ui';
import { useQuery } from '@tanstack/vue-query';
import { useApolloClient } from '@vue/apollo-composable';
import dayjs from 'dayjs';
import type { GetUserListQuery, GetUserListQueryVariables } from '~/graphql/apis/graphql';
import { GetUserListDocument } from '~/graphql/apis/graphql';
import { defineManualStore } from '~/plugins/storeManager';

interface MajorForm {
  searchValue?: string;
  searchType: 'nickname' | 'username' | 'userId';
  createdAt: [number, number] | null;
}

export interface UserRowData {
  birthday?: string;
  email?: string;
  isDeleted?: boolean;
  loginId: string;
  nickname?: string;
  phoneNumber?: string;
  profileImageId?: string;
  userId?: string;
  userProfileImg?: string;
  signUpType?: string;
  userStatus?: string;
}

type OmitPageGetUserListQueryVariables = Omit<GetUserListQueryVariables, 'pageNum' | 'perPage'>;

const inputOptions = [
  {
    label: '닉네임',
    value: 'nickname',
  },
  {
    label: '로그인 ID',
    value: 'loginId',
  },
  {
    label: '회원번호',
    value: 'userId',
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

export const useMajorFormStore = defineManualStore(defMajorFormStore, 'userMajorForm');
export const useMajorListStore = defineManualStore(defMajorListStore, 'userMajorList');

function defMajorFormStore() {
  const formRef = ref<FormInst | null>(null);
  const formModel = ref<MajorForm>({
    searchType: 'nickname',
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
  const dataList = ref<UserRowData[]>([]);
  const checkedRowKeysRef = ref<DataTableRowKey[]>([]);

  const dataColumns: DataTableColumns<UserRowData> = [
    {
      type: 'selection',
    },
    {
      key: 'userId',
      title: '회원번호',
      width: 100,
      align: 'center',
    },
    {
      key: 'nickname',
      title: '닉네임',
      render(row) {
        return h('a', {
          style: {
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'underline',
            cursor: 'pointer',
          },
          onClick: () => {
            router.push(`/user/${row.userId}`);
          },
        }, [row.nickname]);
      },
      width: '30%',
    },
    {
      key: 'loginId',
      title: '로그인 ID',
      width: '30%',
    },

    {
      key: 'email',
      title: '이메일',
      width: '30%',
    },
    {
      key: 'phoneNumber',
      title: '전화번호',
      width: 150,
      align: 'center',
    },
    {
      key: 'birthday',
      title: '생년월일',
      width: 150,
      align: 'center',
    },
  ];

  const searchParams = ref<OmitPageGetUserListQueryVariables>({
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
    queryKey: ['users', 'list', pagination.page, pagination.pageSize, searchParams.value],
    queryFn: async () => {
      const { data } = await client.query<GetUserListQuery>({
        query: GetUserListDocument,
        variables: {
          ...searchParams.value,
          pageNum: pagination.page,
          perPage: pagination.pageSize,
        },
      });
      pagination.itemCount = data.getUserList?.totalCount || 0;

      dataList.value = data.getUserList?.data?.map((e) => {
        return {
          email: e?.email,
          birthday: e?.birthday,
          // isDeleted: e?.isDeleted,
          loginId: e?.loginId,
          nickname: e?.nickname,
          phoneNumber: e?.phoneNumber,
          userId: e?.userId,
          signUpType: e?.signUpType,
          userStatus: e?.userStatus,
        };
      }) as UserRowData[] || [];

      return data.getUserList || [];
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
