<script setup lang="ts">
import { useMajorDetailStore, getImageUrl } from './tastingNoteDetail';
import { useMakeNRateHalfStar } from '~/composables/tastingNote/makeNRateHalfStar';

const majorDetail = useMajorDetailStore();
const detailSkeletonStyle = { width: '100%', height: '24px' };

useMakeNRateHalfStar();
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
        테이스팅 노트 번호
      </template>
      <template #default>
        <template v-if="majorDetail.isLoading">
          <n-skeleton
            :style="detailSkeletonStyle"
          />
        </template>
        <template v-else>
          <div class="detail-item">
            {{ majorDetail.detailData?.tastingNoteId }}
          </div>
        </template>
      </template>
    </n-descriptions-item>
    <n-descriptions-item>
      <template #label>
        주류
      </template>
      <template #default>
        <template v-if="majorDetail.isLoading">
          <n-skeleton
            :style="detailSkeletonStyle"
          />
        </template>
        <template v-else>
          <div class="detail-item">
            {{ majorDetail.detailData?.alcoholName }}
          </div>
        </template>
      </template>
    </n-descriptions-item>

    <n-descriptions-item>
      <template #label>
        제목
      </template>
      <template #default>
        <template v-if="majorDetail.isLoading">
          <n-skeleton
            :style="detailSkeletonStyle"
          />
        </template>
        <template v-else>
          <div class="detail-item">
            {{ majorDetail.detailData?.title }}
          </div>
        </template>
      </template>
    </n-descriptions-item>

    <n-descriptions-item>
      <template #label>
        작성자
      </template>
      <template #default>
        <template v-if="majorDetail.isLoading">
          <n-skeleton
            :style="detailSkeletonStyle"
          />
        </template>
        <template v-else>
          <div class="detail-item">
            <nuxt-link
              :to="`/user/${majorDetail.detailData?.userId}`"
              class="user-link"
            >
              {{ majorDetail.detailData?.userNickName }}
            </nuxt-link>
          </div>
        </template>
      </template>
    </n-descriptions-item>

    <n-descriptions-item>
      <template #label>
        별점
      </template>
      <template #default>
        <template v-if="majorDetail.isLoading">
          <n-skeleton
            :style="detailSkeletonStyle"
          />
        </template>
        <template v-else>
          <div class="detail-item">
            <n-rate
              allow-half
              :value="majorDetail.detailData?.rating ? majorDetail.detailData.rating / 2 : 0"
              readonly
            />
          </div>
        </template>
      </template>
    </n-descriptions-item>

    <n-descriptions-item>
      <template #label>
        내용
      </template>
      <template #default>
        <template v-if="majorDetail.isLoading">
          <n-skeleton
            :style="detailSkeletonStyle"
          />
        </template>
        <template v-else>
          <div class="detail-item">
            {{ majorDetail.detailData?.review }}
          </div>
        </template>
      </template>
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
      <template #default>
        <template v-if="majorDetail.isLoading">
          <n-skeleton
            :style="detailSkeletonStyle"
          />
        </template>
        <template v-else>
          <div class="detail-item">
            <!-- {{ majorDetail.detailData?.views }} -->
          </div>
        </template>
      </template>
    </n-descriptions-item>

    <n-descriptions-item>
      <template #label>
        댓글수
      </template>
      <template #default>
        <template v-if="majorDetail.isLoading">
          <n-skeleton
            :style="detailSkeletonStyle"
          />
        </template>
        <template v-else>
          <div class="detail-item">
            {{ majorDetail.detailData?.commentCount }}
          </div>
        </template>
      </template>
    </n-descriptions-item>

    <n-descriptions-item>
      <template #label>
        좋아요수
      </template>
      <template #default>
        <template v-if="majorDetail.isLoading">
          <n-skeleton
            :style="detailSkeletonStyle"
          />
        </template>
        <template v-else>
          <div class="detail-item">
            {{ majorDetail.detailData?.likeCount }}
          </div>
        </template>
      </template>
    </n-descriptions-item>

    <n-descriptions-item>
      <template #label>
        작성일자
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
        <template v-else />
        <div class="detail-item">
          {{ majorDetail.getDateFormat(majorDetail.detailData?.updatedAt) }}
        </div>
      </template>
    </n-descriptions-item>
  </n-descriptions>
</template>
