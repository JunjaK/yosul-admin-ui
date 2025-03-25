<template>
  <div class="layout-wrapper" :class="{ 'menu-collapsed': !menuOpen }">
    <LNB v-model:is-open="menuOpen" />
    <div class="layout-content">
      <AppNav :is-open="menuOpen" @toggle-menu="toggleMenu" />
      <main class="main-content">
        <slot />
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppFooter from '~/components/layouts/AppFooter.vue'
import AppNav from '~/components/layouts/AppNav.vue'
import LNB from '~/components/layouts/LNB.vue'

defineOptions({
  name: 'DefaultLayout'
})

const menuOpen = ref(true)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>
