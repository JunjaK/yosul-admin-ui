<script lang="ts" setup>
import { darkTheme, dateKoKR, koKR } from 'naive-ui';
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
</script>

<template>
  <n-config-provider
    :theme="darkTheme"
    :locale="koKR"
    :date-locale="dateKoKR"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <VueQueryDevtools />
  </n-config-provider>
</template>
