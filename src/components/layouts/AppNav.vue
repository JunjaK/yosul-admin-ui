<script setup lang="ts">
import { computed } from 'vue';
import menuData from '~/utils/menuData';

defineOptions({
  name: 'AppNav',
});

const route = useRoute();

const menuTitle = computed(() => {
  return menuData.find(item => item.route === route.path)?.label || 'Dashboard';
});
</script>

<template>
  <n-page-header>
    <template #title>
      <h2 class="page-title m-0">
        {{ menuTitle }}
      </h2>
    </template>
  </n-page-header>
</template>
