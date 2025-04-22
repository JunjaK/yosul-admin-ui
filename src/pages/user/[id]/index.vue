<script setup lang="ts">
import main from '../_subs/user';
import DetailContents from './_subs/DetailContents.vue';
import DetailHeader from './_subs/DetailHeader.vue';

const { majorForm, majorList } = main();
</script>

<template>
  <div>
    <DetailHeader />
    <n-divider />
    <DetailContents />
  </div>
</template>
