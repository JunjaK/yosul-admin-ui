<script setup lang="ts">
import type { FormInst } from 'naive-ui';
import { storeToRefs } from 'pinia';
import main from './user';

const { majorForm } = main();
const { formModel } = storeToRefs(majorForm);
</script>

<template>
  <n-card hoverable>
    <n-form
      :ref="(el) => { majorForm.formRef = el as unknown as FormInst }"
      :model="majorForm.formModel"
      :rules="majorForm.rules"
      @submit="majorForm.onSubmit"
    >
      <div class="search-filter">
        <div class="search-filter-item">
          <n-form-item
            class="select-input small"
            label="검색어"
            path="searchType"
          >
            <n-select
              v-model:value="formModel.searchType"
              placeholder="검색 유형을 선택해주세요."
              :options="majorForm.inputOptions"
            />
          </n-form-item>
          <n-form-item
            path="searchValue"
            class="text-input medium"
          >
            <n-input
              v-model:value="formModel.searchValue"
              placeholder="검색어를 입력해주세요."
            />
          </n-form-item>
        </div>
        <div class="search-filter-item">
          <n-form-item
            class="date-range-input"
            label="생성일"
            path="searchType"
          >
            <n-date-picker
              v-model:value="formModel.createdAt"
              close-on-select
              clearable
              type="daterange"
            />
          </n-form-item>
        </div>
      </div>
      <div class="search-filter-button">
        <n-button
          class="search-filter-button-item"
          type="primary"
          attr-type="submit"
        >
          검색
        </n-button>
        <n-button
          class="search-filter-button-item"
        >
          초기화
        </n-button>
      </div>
    </n-form>
  </n-card>
</template>
