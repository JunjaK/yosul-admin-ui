<script setup lang="ts">
import SearchFilter from './_subs/SeearchFilter.vue';
import DataList from './_subs/DataList.vue';
import { useMajorFormStore, useMajorListStore } from './_subs/tastingNote';

const router = useRouter();

const majorForm = useMajorFormStore();
const majorList = useMajorListStore();

defineOptions({
  name: 'TastingNotePage',
});
onMounted(() => {
  majorList.refetch();
});

onUnmounted(() => {
  if (router.currentRoute.value.path.includes('tasting-note')) {
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
