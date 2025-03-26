<template>
  <Form
v-slot="$form" :initial-values="initialValues" :resolver="resolver" @submit="onFormSubmit"
  @reset="onFormReset"
  >
    <Card>
      <template #content>
        <div class="search-filter-content">

          <div class="search-form-field">
            <div class="search-form-field-label">
              <label for="search-form-field-input">검색어</label>
            </div>
            <div class="search-form-field-input">
              <Select
name="searchType" :options="selectOptions" option-label="label" option-value="value"
                class="w-40" />
              <InputText name="searchWord" type="text" placeholder="검색어를 입력해주세요." />
            </div>
            
          </div>

          <div class="search-form-field">
            <div class="search-form-field-label">
              <label for="search-form-field-input">작성일</label>
            </div>
            <div class="search-form-field-input">
              <Select
name="searchType" :options="selectOptions" option-label="label" option-value="value"
                class="w-40" />
              <InputText name="searchWord" type="text" placeholder="검색어를 입력해주세요." />
            </div>
            
          </div>

        </div>
      </template>
      <template #footer>
        <div class="search-filter-footer">
          <Button type="submit" severity="primary" label="검색" />
          <Button type="button" severity="secondary" label="초기화" />
        </div>
      </template>
    </Card>
  </Form>

</template>

<script setup lang="ts">
import { Form, type FormSubmitEvent } from '@primevue/forms';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

const initialValues = ref({
  searchWord: '',
  searchType: 'all'
});

const resolver = ref(zodResolver(
  z.object({
    searchWord: z.string(),
    searchType: z.string()
  })
));

const selectOptions = ref([
  { label: '전체', value: 'all' },
  { label: '제목', value: 'title' },
  { label: '내용', value: 'content' },
]);


const onFormSubmit = (event: FormSubmitEvent) => {
  console.log(event.values);
  
  if (event.valid) {
    console.log('valid');
  }
}
console.log(resolver)
const onFormReset = () => {
  console.log('reset');
}

</script>
