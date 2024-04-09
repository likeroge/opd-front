<template>
  Results
  <q-table
    :rows="tankeringResults"
    :columns="[
      {
        name: 'id',
        label: 'ID',
        field: 'id',
        align: 'left',
      },
      {
        name: 'dep_price',
        label: 'DEP Price',
        field: 'price_dep',
        align: 'center',
      },
      {
        name: 'arr_price',
        label: 'ARR Price',
        field: 'price_arr',
        align: 'center',
      },
      {
        name: 'trip_time',
        label: 'Trip Time',
        align: 'center',
        field: 'trip_time',
      },
      {
        name: 'aircraft',
        label: 'Aircraft',
        align: 'center',
        field: 'aircraft',
      },
    ]"
    :rows-per-page-label="'Записи на странице'"
    class="q-mb-md"
  />
  <BackButton />
</template>

<script setup lang="ts">
import { api } from 'src/boot/axios';
import { onMounted, ref } from 'vue';
import BackButton from 'src/uikit/BackButton.vue';
import { ITankeringResult } from 'src/models/TankeringResult';

const tankeringResults = ref<ITankeringResult[]>([] as ITankeringResult[]);

onMounted(async () => {
  const { data } = await api.get<ITankeringResult[]>('/tankering/results');
  console.log(data);
  tankeringResults.value = data;
});
</script>
