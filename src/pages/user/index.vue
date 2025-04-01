<script setup lang="ts">
import { storeToRefs } from 'pinia';
import main from './_subs/user';
import SearchFilter from './_subs/SeearchFilter.vue';
import DataList from './_subs/DataList.vue';

defineOptions({
  name: 'UserPage',
});

const { majorList } = main();
const { isLoading, error } = storeToRefs(majorList);
</script>

<template>
  <div>
    <section>
      <SearchFilter />
    </section>
    <section>
      <div v-if="isLoading">
        Loading...
      </div>
      <div v-else-if="error">
        Error: {{ error.message }}
      </div>
      <div v-else>
        <DataList />
      </div>
    </section>
  </div>
</template>
