<script setup lang="ts">
import { useMajorDetailStore, useMajorFormStore } from './userDetail';

const majorDetail = useMajorDetailStore();
const majorForm = useMajorFormStore();
</script>

<template>
  <section class="detail-header">
    <n-card hoverable>
      <template v-if="majorDetail.detailData?.nickname">
        <h3>
          {{ majorDetail.detailData?.nickname }}
        </h3>
      </template>
      <template v-else>
        <n-skeleton
          :style="detailHeaderSkeletonStyle"
        />
      </template>
      <div class="action-buttons">
        <template v-if="majorDetail.editMode">
          <n-button
            type="error"
            @click="majorDetail.deleteUser"
          >
            삭제
          </n-button>
          <n-button
            type="primary"
            @click="majorForm.onSubmit"
          >
            저장
          </n-button>
          <n-button
            @click="majorDetail.toggleEditMode"
          >
            취소
          </n-button>
        </template>
        <template v-else>
          <n-button
            type="warning"
            @click="majorDetail.toggleEditMode"
          >
            수정
          </n-button>
          <n-button @click="majorDetail.goList">
            목록
          </n-button>
        </template>
      </div>
    </n-card>
  </section>
</template>
