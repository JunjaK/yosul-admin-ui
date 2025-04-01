<script setup lang="ts">
import SearchFilter from './_subs/SeearchFilter.vue';
import DataList from './_subs/DataList.vue';

defineOptions({
  name: 'UserPage',
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
