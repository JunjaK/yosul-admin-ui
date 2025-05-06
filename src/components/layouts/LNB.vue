<script lang="ts" setup>
import type { MenuOption } from 'naive-ui';
import { h, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';
import { Icon } from '#components';
import useConfigStore from '~/stores/configStore';

const configStore = useConfigStore();
const { menuCollapsed } = storeToRefs(configStore);

const selectedMenu = ref<string>('');

const route = useRoute();
selectedMenu.value = '/' + `${route.path.split('/')[1]}` || 'dashboard';

function renderIcon(name: string, className: string) {
  return () => h(Icon, { name: name, class: className });
}

const menuOptions: MenuOption[] = menuData.map((item) => {
  return {
    label: () => h(RouterLink, { to: item.route, class: 'ml-2' }, { default: () => item.label }),
    key: item.route,
    icon: renderIcon(item.icon, 'text-2xl'),
  };
});
</script>

<template>
  <div class="lnb-container">
    <div
      class="logo-wrapper"
      :class="{ collapsed: menuCollapsed }"
    >
      <Icon
        name="octicon:settings"
        class="text-4xl"
      />
      <div class="logo-text">
        Yosul Admin
      </div>
    </div>

    <n-divider class="lnb-divider" />
    <n-layout-sider
      class="lnb-menu"
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :collapsed="menuCollapsed"
      show-trigger
      @collapse="menuCollapsed = true"
      @expand="menuCollapsed = false"
    >
      <n-menu
        v-model:value="selectedMenu"
        :collapsed="menuCollapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
      />
    </n-layout-sider>
  </div>
</template>
