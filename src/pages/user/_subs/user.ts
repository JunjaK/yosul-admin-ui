import { ref } from 'vue';
import type { FormInst, FormItemRule, DataTableColumns, DataTableRowKey } from 'naive-ui';
import { useQuery } from '@tanstack/vue-query';
import { useApolloClient } from '@vue/apollo-composable';
import dayjs from 'dayjs';
import type { GetUserListQuery, GetUserListQueryVariables } from '~/graphql/apis/graphql';
import { GetUserListDocument } from '~/graphql/apis/graphql';
import { defineLocalStore } from '~/plugins/storeManager';

type OptionalGetUserListQueryVariables = Partial<GetUserListQueryVariables>;

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
}

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

const dataColumns: DataTableColumns<UserRowData> = [
  {
    type: 'selection',
  },
  {
    key: 'userId',
    title: '회원번호',
  },
  {
    key: 'nickname',
    title: '닉네임',
  },
  {
    key: 'loginId',
    title: '로그인 ID',
  },

  {
    key: 'email',
    title: '이메일',
  },
  {
    key: 'phoneNumber',
    title: '전화번호',
  },
  {
    key: 'birthday',
    title: '생년월일',
  },
  {
    key: 'userProfileImg',
    title: '프로필 이미지',
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

const useMajorFormStore = defineLocalStore(defMajorFormStore);
const useMajorListStore = defineLocalStore(defMajorListStore);

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
        console.log(errors);
      }
      else {
        majorList.updateSearchParams(formModel.value);
        majorList.refetch();
      }
    });
  }

  return {
    formRef,
    formModel,
    rules,
    inputOptions,
    onSubmit,
  };
}

function defMajorListStore() {
  const { client } = useApolloClient();
  const dataList = ref<UserRowData[]>([]);
  const checkedRowKeysRef = ref<DataTableRowKey[]>([]);

  const searchParams = ref<OptionalGetUserListQueryVariables>({
    nickname: '',
    loginId: '',
    createdAfter: '',
    createdBefore: '',
    updatedAfter: '',
    updatedBefore: '',
    userId: undefined,
  });

  const pagination = reactive({
    page: 1,
    pageSize: 10,
    onChange: (page: number) => {
      pagination.page = page;
    },
  });

  const { isLoading, error, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const { data } = await client.query<GetUserListQuery>({
        query: GetUserListDocument,
        variables: searchParams.value,
      });
      dataList.value = data.getUserList?.map((e) => {
        return {
          email: e?.email,
          birthday: e?.birthday,
          isDeleted: e?.isDeleted,
          loginId: e?.loginId,
          nickname: e?.nickname,
          phoneNumber: e?.phoneNumber,
          profileImageId: e?.profileImageId,
          userId: e?.userId,
          userProfileImg: e?.userProfileImg,
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

    console.log(searchParams.value);
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
