<template>
  <nav class="header-container" :class="{ 'menu-opened': props.isOpen }">
    <Menubar class="header-menubar">
      <template #start>
        <div class="flex items-center">
          <Button 
            class="mr-2" 
            variant="text"
            @click="toggleMenu"
          >
            <Icon :name="props.isOpen ? 'lucide:chevron-left' : 'lucide:chevron-right'" />
          </Button>
          <h2 class="page-title m-0">{{menuTitle}}</h2>
        </div>
      </template>
      <template #end>
        <div class="flex align-items-center gap-3">
          <Button icon="pi pi-bell" text class="p-button-rounded p-button-text" />
        </div>
      </template>
    </Menubar>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import menuData from "~/utils/menuData";

defineOptions({
  name: 'AppNav'
});

const props = defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits<{
  'toggle-menu': []
}>();

const route = useRoute();

const menuTitle = computed(() => {
  return menuData.find(item => item.route === route.path)?.label || 'Dashboard';
});

const toggleMenu = () => {
  emit('toggle-menu');
};
</script>