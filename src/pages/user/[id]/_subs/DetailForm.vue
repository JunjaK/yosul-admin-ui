<script setup lang="ts">
import type { FormInst } from 'naive-ui';

import { storeToRefs } from 'pinia';
import { useMajorDetailStore, useMajorFormStore } from './userDetail';

const majorDetail = useMajorDetailStore();
const majorForm = useMajorFormStore();
const { formModel } = storeToRefs(majorForm);
</script>

<template>
  <n-form
    :ref="(el) => { majorForm.formRef = el as unknown as FormInst }"
    :model="formModel"
    :rules="majorForm.rules"
    :show-feedback="false"
    :show-label="false"
    @submit="majorForm.onSubmit"
  >
    <n-descriptions
      label-placement="left"
      bordered
      label-style="width: 150px"
      :column="1"
    >
      <n-descriptions-item>
        <template #label>
          회원번호
        </template>
        <div class="detail-item">
          {{ majorDetail.detailData?.userId }}
        </div>
      </n-descriptions-item>
      <n-descriptions-item
        :content-style="detailFormItemStyle"
      >
        <template #label>
          닉네임
        </template>
        <n-form-item
          path="nickname"
          class="text-input medium"
        >
          <n-input
            v-model:value="formModel.nickname"
          />
        </n-form-item>
      </n-descriptions-item>
      <n-descriptions-item>
        <template #label>
          로그인 ID
        </template>
        <div class="detail-item">
          {{ majorDetail.detailData?.loginId }}
        </div>
      </n-descriptions-item>
      <n-descriptions-item
        :content-style="detailFormItemStyle"
      >
        <template #label>
          이메일
        </template>
        <n-form-item
          path="email"
          class="text-input medium"
        >
          <n-input
            v-model:value="formModel.email"
          />
        </n-form-item>
      </n-descriptions-item>
      <n-descriptions-item
        :content-style="detailFormItemStyle"
      >
        <template #label>
          전화번호
        </template>
        <n-form-item
          path="phoneNumber"
          class="text-input medium"
        >
          <n-input
            v-model:value="formModel.phoneNumber"
          />
        </n-form-item>
      </n-descriptions-item>
      <n-descriptions-item
        :content-style="detailFormItemStyle"
      >
        <template #label>
          생년월일
        </template>
        <n-form-item
          path="birthday"
          class="text-input medium"
        >
          <n-input
            v-model:value="formModel.birthday"
          />
        </n-form-item>
      </n-descriptions-item>
    </n-descriptions>
  </n-form>
</template>
