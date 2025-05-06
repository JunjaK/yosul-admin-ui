<script setup lang="ts">
import { useMajorDetailStore } from './userDetail';

const majorDetail = useMajorDetailStore();
</script>

<template>
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
      <template #default>
        <template v-if="majorDetail.isLoading">
          <n-skeleton
            :style="detailSkeletonStyle"
          />
        </template>
        <template v-else>
          <div class="detail-item">
            {{ majorDetail.detailData?.userId }}
          </div>
        </template>
      </template>
    </n-descriptions-item>
    <n-descriptions-item>
      <template #label>
        닉네임
      </template>
      <template #default>
        <template v-if="majorDetail.isLoading">
          <n-skeleton
            :style="detailSkeletonStyle"
          />
        </template>
        <template v-else>
          <div class="detail-item">
            {{ majorDetail.detailData?.nickname }}
          </div>
        </template>
      </template>
    </n-descriptions-item>
    <n-descriptions-item>
      <template #label>
        로그인 ID
      </template>
      <template #default>
        <template v-if="majorDetail.isLoading">
          <n-skeleton
            :style="detailSkeletonStyle"
          />
        </template>
        <template v-else>
          <div class="detail-item">
            {{ majorDetail.detailData?.loginId }}
          </div>
        </template>
      </template>
    </n-descriptions-item>
    <n-descriptions-item>
      <template #label>
        이메일
      </template>
      <template #default>
        <template v-if="majorDetail.isLoading">
          <n-skeleton
            :style="detailSkeletonStyle"
          />
        </template>
        <template v-else>
          <div class="detail-item">
            {{ majorDetail.detailData?.email }}
          </div>
        </template>
      </template>
    </n-descriptions-item>
    <n-descriptions-item>
      <template #label>
        전화번호
      </template>
      <template #default>
        <template v-if="majorDetail.isLoading">
          <n-skeleton
            :style="detailSkeletonStyle"
          />
        </template>
        <template v-else>
          <div class="detail-item">
            {{ majorDetail.detailData?.phoneNumber }}
          </div>
        </template>
      </template>
    </n-descriptions-item>
    <n-descriptions-item>
      <template #label>
        생년월일
      </template>
      <template #default>
        <template v-if="majorDetail.isLoading">
          <n-skeleton
            :style="detailSkeletonStyle"
          />
        </template>
        <template v-else>
          <div class="detail-item">
            {{ majorDetail.detailData?.birthday }}
          </div>
        </template>
      </template>
    </n-descriptions-item>
    <n-descriptions-item>
      <template #label>
        가입일자
      </template>
      <template #default>
        <template v-if="majorDetail.isLoading">
          <n-skeleton
            :style="detailSkeletonStyle"
          />
        </template>
        <template v-else>
          <div class="detail-item">
            {{ majorDetail.getDateFormat(majorDetail.detailData?.createdAt) }}
          </div>
        </template>
      </template>
    </n-descriptions-item>
    <n-descriptions-item>
      <template #label>
        수정일자
      </template>
      <template #default>
        <template v-if="majorDetail.isLoading">
          <n-skeleton
            :style="detailSkeletonStyle"
          />
        </template>
        <template v-else>
          <div class="detail-item">
            {{ majorDetail.getDateFormat(majorDetail.detailData?.updatedAt) }}
          </div>
        </template>
      </template>
    </n-descriptions-item>
  </n-descriptions>
</template>
