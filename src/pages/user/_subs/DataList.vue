<script setup lang="ts">
import { storeToRefs } from 'pinia';
import main from './user';
import type { UserRowData } from './user';

const { majorList } = main();
const { dataList, pagination, isLoading, error } = storeToRefs(majorList);
const { handleCheck } = majorList;
const rowKey = (row: UserRowData) => row.userId ?? 'error';
</script>

<template>
  <n-card
    hoverable
    class="data-list-wrapper"
  >
    <template v-if="isLoading">
      <n-space vertical>
        <n-skeleton
          v-for="i in 11"
          :key="i"
          height="42px"
        />
      </n-space>
    </template>
    <template v-else-if="error">
      Error: {{ error.message }}
    </template>
    <template v-else>
      <n-data-table
        :columns="majorList.dataColumns"
        :data="dataList"
        :pagination="pagination"
        :row-key="rowKey"
        @update:checked-row-keys="handleCheck"
      />
    </template>
  </n-card>
</template>
