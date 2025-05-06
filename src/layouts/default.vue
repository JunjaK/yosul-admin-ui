<script setup lang="ts">
import AppFooter from '~/components/layouts/AppFooter.vue';
import AppNav from '~/components/layouts/AppHeader.vue';
import LNB from '~/components/layouts/LNB.vue';

defineOptions({
  name: 'DefaultLayout',
});
</script>

<template>
  
        <n-layout
          has-sider
          class="layout-wrapper"
        >
          <LNB />
          <div class="layout-content">
            <AppNav />
            <n-layout-content>
              <main class="main-content">
                <slot />
              </main>
            </n-layout-content>

            <AppFooter />
          </div>
        </n-layout>
</template>
