<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import menuData from '~/utils/menuData';
import useConfigStore from '~/stores/configStore';

defineOptions({
  name: 'AppHeader',
});

const configStore = useConfigStore();
const { menuCollapsed } = storeToRefs(configStore);

const route = useRoute();

const options = [
  {
    label: '로그아웃',
    key: 'logout',
  },
];

const menuTitle = computed(() => {
  return menuData.find(item => route.path.includes(item.route))?.label || 'Dashboard';
});

function handleSelect(key: string) {
  if (key === 'logout') {
    logout();
  }
}

function logout() {
  console.log('logout');
}
</script>

<template>
  <div
    class="app-header"
    :class="{ collapsed: menuCollapsed }"
  >
    <div>
      <h2 class="page-title">
        {{ menuTitle }}
      </h2>
    </div>
    <div class="flex gap-2">
      <n-avatar
        round
        size="small"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
      <n-dropdown
        trigger="click"
        :options="options"
        @select="handleSelect"
      >
        <n-button
          text
          class="text-2xl"
        >
          <Icon
            name="octicon:settings-24"
            class="text-2xl"
          />
        </n-button>
      </n-dropdown>
    </div>
  </div>
</template>
