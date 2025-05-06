<script lang="ts" setup>
import {  darkTheme, dateKoKR, koKR } from 'naive-ui';


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
  </n-config-provider>
</template>
