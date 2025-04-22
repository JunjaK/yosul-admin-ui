<script setup lang="ts">
import SearchFilter from './_subs/SeearchFilter.vue';
import DataList from './_subs/DataList.vue';
import { useMajorFormStore, useMajorListStore } from './_subs/user';
import { resetStore } from '~/plugins/storeManager';

defineOptions({
  name: 'UserPage',
});

onUnmounted(() => {
  const router = useRouter();

  if (router.currentRoute.value.path.includes('user')) {
    return;
  }
  const majorForm = useMajorFormStore();
  const majorList = useMajorListStore();

  majorForm.$reset();
  majorList.$reset();
  majorForm.$dispose();
  majorList.$dispose();
});
</script>

<template>
  <div>
    <section>
      <SearchFilter />
    </section>
    <section>
      <DataList />
    </section>
  </div>
</template>
