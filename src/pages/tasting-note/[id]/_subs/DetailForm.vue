<script setup lang="ts">
import type { FormInst } from 'naive-ui';

import { storeToRefs } from 'pinia';
import { useMajorDetailStore, useMajorFormStore, getImageUrl } from './tastingNoteDetail';
import { useMakeNRateHalfStar } from '~/composables/tastingNote/makeNRateHalfStar';

const majorDetail = useMajorDetailStore();
const majorForm = useMajorFormStore();
const { formModel } = storeToRefs(majorForm);

useMakeNRateHalfStar();
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
          테이스팅 노트 번호
        </template>
        <div class="detail-item">
          {{ majorDetail.detailData?.tastingNoteId }}
        </div>
      </n-descriptions-item>
      <n-descriptions-item>
        <template #label>
          주류
        </template>
        <div class="detail-item ">
          {{ majorDetail.detailData?.alcoholName }}
        </div>
      </n-descriptions-item>
      <n-descriptions-item
        :content-style="detailFormItemStyle"
      >
        <template #label>
          제목
        </template>
        <n-form-item
          path="title"
          class="text-input medium"
        >
          <n-input
            v-model:value="formModel.title"
          />
        </n-form-item>
      </n-descriptions-item>
      <n-descriptions-item>
        <template #label>
          작성자
        </template>
        <div class="detail-item">
          {{ majorDetail.detailData?.userNickName }}
        </div>
      </n-descriptions-item>
      <n-descriptions-item
        :content-style="detailFormItemStyle"
      >
        <template #label>
          별점
        </template>
        <n-form-item
          path="rating"
          class="text-input medium"
        >
          <n-rate
            allow-half
            :value="majorDetail.detailData?.rating ? majorDetail.detailData.rating / 2 : 0"
            readonly
          />
        </n-form-item>
      </n-descriptions-item>
      <n-descriptions-item
        :content-style="detailFormItemStyle"
      >
        <template #label>
          내용
        </template>
        <n-form-item
          path="content"
          class="text-input medium"
        >
          <n-input
            v-model:value="formModel.review"
            type="textarea"
            :autosize="{ minRows: 3, maxRows: 6 }"
          />
        </n-form-item>
      </n-descriptions-item>
      <n-descriptions-item>
        <template #label>
          첨부사진
        </template>
        <template #default>
          <template v-if="majorDetail.isLoading">
            <n-skeleton
              :style="detailSkeletonStyle"
            />
          </template>
          <template v-else>
            <div class="detail-item pictures">
              <n-carousel style="width: 400px">
                <n-image
                  v-for="image in majorDetail.detailData?.attachFiles"
                  :key="image?.attachFileId ?? ''"
                  class="carousel-img"
                  :width="400"
                  :src="getImageUrl(image?.filePath ?? '')"
                  :alt="majorDetail.detailData?.title ?? ''"
                />
              </n-carousel>
            </div>
          </template>
        </template>
      </n-descriptions-item>
      <n-descriptions-item>
        <template #label>
          조회수
        </template>
        <div class="detail-item">
          {{ majorDetail.detailData?.views }}
        </div>
      </n-descriptions-item>
      <n-descriptions-item>
        <template #label>
          댓글수
        </template>
        <div class="detail-item">
          {{ majorDetail.detailData?.commentCount }}
        </div>
      </n-descriptions-item>
      <n-descriptions-item>
        <template #label>
          좋아요수
        </template>
        <div class="detail-item">
          {{ majorDetail.detailData?.likeCount }}
        </div>
      </n-descriptions-item>
      <n-descriptions-item>
        <template #label>
          작성일자
        </template>
        <div class="detail-item">
          {{ majorDetail.getDateFormat(majorDetail.detailData?.createdAt) }}
        </div>
      </n-descriptions-item>
      <n-descriptions-item>
        <template #label>
          수정일자
        </template>
        <div class="detail-item">
          {{ majorDetail.getDateFormat(majorDetail.detailData?.updatedAt) }}
        </div>
      </n-descriptions-item>
    </n-descriptions>
  </n-form>
</template>
