<script setup lang="ts">
import DetailData from './DetailData.vue';
import DetailForm from './DetailForm.vue';
import { useMajorDetailStore } from './userDetail';

const majorDetail = useMajorDetailStore();
</script>

<template>
  <section class="detail-contents">
    <template v-if="majorDetail.error">
      Error: {{ majorDetail.error.message }}
    </template>
    <template v-else-if="majorDetail.editMode">
      <DetailForm />
    </template>
    <template v-else>
      <DetailData />
    </template>
  </section>
</template>
