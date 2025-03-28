<script lang="ts" setup>
import type { MenuOption } from 'naive-ui';
import { h, ref } from 'vue';
import { Icon, NuxtLink } from '#components';

function renderIcon(name: string, className: string) {
  return () => h(Icon, { name: name, class: className });
}

const menuOptions: MenuOption[] = menuData.map((item) => {
  return {
    label: () => h(
      NuxtLink, { to: item.route }, item.label,
    ),
    key: item.route,
    icon: renderIcon(item.icon, 'text-2xl'),

  };
});

console.log(menuOptions);

const collapsed = ref(true);

function renderMenuLabel(option: MenuOption) {
  if ('href' in option) {
    return h('a', { href: option.href, target: '_blank' }, [
      option.label as string,
    ]);
  }
}
</script>

<template>
  <n-layout-sider
    bordered
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :collapsed="collapsed"
    show-trigger
    @collapse="collapsed = true"
    @expand="collapsed = false"
  >
    <n-menu
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      :render-label="renderMenuLabel"
    />
  </n-layout-sider>
</template>
