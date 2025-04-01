import { defineManualStore } from '~/plugins/storeManager';

const useConfigStore = defineManualStore(() => {
  const menuCollapsed = ref(false);

  return {
    menuCollapsed,
  };
}, 'ConfigStore');

export default useConfigStore;
