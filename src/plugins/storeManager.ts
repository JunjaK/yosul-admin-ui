import type {
  StoreDefinition,
  _ExtractActionsFromSetupStore,
  _ExtractGettersFromSetupStore,
  _ExtractStateFromSetupStore,
  PiniaPluginContext,
} from 'pinia';
import { defineStore, createPinia } from 'pinia';
import { onBeforeUnmount } from 'vue';
import { v4 as uuidv4 } from 'uuid';

declare module 'pinia' {
  export interface PiniaCustomProperties {
    $disposeStore(id?: string): void;
    $reset(): void;
  }
}
export type KenyaStore<Id extends string, SS> = StoreDefinition<Id, _ExtractStateFromSetupStore<SS>, _ExtractGettersFromSetupStore<SS>, _ExtractActionsFromSetupStore<SS>>;

/**
 * 주로 페이지에서 한정적으로 사용되는 로컬 스토어를 생성합니다
 * @description 페이지 Unmounted 시점에 store 는 자동으로 dispose 됩니다
 * @param storeSetUp
 * @param id
 */
function defineLocalStore<Store>(storeSetUp: () => Store, id?: string): KenyaStore<string, Store> {
  id = id ?? `local_${uuidv4()}`;

  const store = defineStore(id, () => {
    const setup = storeSetUp();

    onBeforeUnmount(() => {
      const useStore = store();
      useStore.$reset();
      useStore.$dispose();
    });

    return setup;
  });

  return store;
}

function defineManualStore<Store>(storeSetUp: () => Store, id?: string): KenyaStore<string, Store> {
  id = id ?? `local_${uuidv4()}`;

  const store = defineStore(id, () => {
    return storeSetUp();
  });

  return store;
}

function resetStore(context: PiniaPluginContext): void {
  const { store } = context;
  store.$reset = () => {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete (context.pinia.state.value as Record<string, unknown>)[store.$id];
  };
  store.$disposeStore = (id?: string) => {
    if (id) {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete (context.pinia.state.value as Record<string, unknown>)[id];

      const stores = context.pinia.state.value as Record<string, unknown>;
      if (id in stores) {
        store.$dispose();
      }
    }
    else {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete (context.pinia.state.value as Record<string, unknown>)[store.$id];
      store.$dispose();
    }
  };
}

export {
  defineLocalStore,
  defineManualStore,
  resetStore,
};

export default defineNuxtPlugin({
  name: 'storemanager',
  enforce: 'pre',
  hooks: {
    'app:created': (app) => {
      const pinia = createPinia();
      app.use(pinia);
      pinia.use(resetStore);
    },
  },
});
