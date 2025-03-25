<template>
  <div>
    <AppNav />
    <slot />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppFooter from '~/components/layouts/AppFooter.vue'
import AppNav from '~/components/layouts/AppNav.vue'
</script>
