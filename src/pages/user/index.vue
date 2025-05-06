<script setup lang="ts">
import SearchFilter from './_subs/SeearchFilter.vue';
import DataList from './_subs/DataList.vue';
import { useMajorFormStore, useMajorListStore } from './_subs/user';

const router = useRouter();

const majorForm = useMajorFormStore();
const majorList = useMajorListStore();

defineOptions({
  name: 'UserPage',
});
onMounted(() => {
  majorList.refetch();
});

onUnmounted(() => {
  if (router.currentRoute.value.path.includes('user')) {
    return;
  }

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
