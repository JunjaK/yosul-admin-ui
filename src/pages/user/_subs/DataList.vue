<script setup lang="ts">
import { storeToRefs } from 'pinia';
import main from './user';
import type { UserRowData } from './user';

const { majorList } = main();
const { dataList, pagination } = storeToRefs(majorList);
const { handleCheck } = majorList;
const rowKey = (row: UserRowData) => row.userId ?? 'error';
</script>

<template>
  <n-card
    hoverable
    class="data-list-wrapper"
  >
    <n-data-table
      :columns="majorList.dataColumns"
      :data="dataList"
      :pagination="pagination"
      :row-key="rowKey"
      @update:checked-row-keys="handleCheck"
    />
  </n-card>
</template>
