<template>
  <nav 
    class="lnb-container"
    :class="{ 'lnb-container-closed': !isMenuOpen }"
  >
    <Menu :model="items" class="lnb-menu">
      <template #start>
        <div class="flex items-center justify-center my-5">
          <Button>LOGO</Button>
        </div>
      </template>
      <template #item="{ item, props: {action} }">
        <nuxt-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a 
            v-ripple 
            :href="href" 
            v-bind="action" 
            :class="{ 'p-menuitem-active': route.path === item.route }"
            @click="navigate"
          >
            <Icon :name="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </nuxt-link>
      </template>
    </Menu>
  </nav>
</template>

<script setup lang="ts">
import type { MenuItem } from "primevue/menuitem";
import { ref, computed } from "vue";
import menuData from "~/utils/menuData"

defineOptions({
  name: 'LNB'
})

const props = defineProps<{
  isOpen?: boolean
}>();

const emit = defineEmits<{
  'update:isOpen': [value: boolean]
}>();

const route = useRoute();
const items = ref<MenuItem[]>(menuData);

// 내부 상태가 아닌 props를 사용
const isMenuOpen = computed({
  get: () => props.isOpen ?? true,
  set: (value) => emit('update:isOpen', value)
});
</script>

<style>
.p-menuitem-active {
  color: var(--p-menu-item-focus-color) !important;
  background: var(--p-menu-item-focus-background) !important;
  font-weight: bold !important;
}
</style>
