<template>
  <q-spinner v-if="isLoaded === false" />
  <q-table
    :columns="[
      {
        name: 'id',
        label: 'ID',
        field: 'id',
        align: 'left',
        sortable: false,
      },
      {
        name: 'title',
        label: 'Служба',
        field: 'title',
        align: 'center',
        sortable: false,
      },
      {
        name: 'created_at',
        label: 'Создан',
        field: 'created_at',
        align: 'center',
        sortable: false,
      },
    ]"
    :rows="departments"
  />
  <BackButton />
</template>

<script setup lang="ts">
import BackButton from '/src/uikit/BackButton.vue';
import { api } from 'src/boot/axios';
import { onMounted, ref } from 'vue';
const departments = ref([]);
const isLoaded = ref(false);
onMounted(async () => {
  const { data } = await api.get('/department/all');
  departments.value = data;
  isLoaded.value = true;
});
</script>
