<template>
  <div class="row justify-end q-py-sm">
    <q-btn @click="onNewJournalClick" color="teal-6">Новая запись</q-btn>
  </div>
  <q-table
    @row-click="onTableRowClick"
    :rows="journals"
    row-key="name"
    v-model:selected="selected"
    :rows-per-page-label="'Записи на странице'"
  />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { api } from 'src/boot/axios';
import { IJournal } from 'src/models/Journal';
import { useRouter } from 'vue-router';
import { AxiosError } from 'axios';

// const airline = ref(null);
// const category = ref(null);
// const airlineOptions = ['Волга-Днепр', 'ABC', 'ATRAN'];
// const categoryOptions = ['METEO', 'FD'];

const router = useRouter();
const journals = ref([]);
const selected = ref([]);

const onNewJournalClick = () => {
  router.push('/journal/new');
};

const onTableRowClick = (_: Event, row: IJournal) => {
  router.push(`/journal/${row.id}`);
};

onMounted(async () => {
  try {
    const { data } = await api.get('journal/all');
    console.log(data);
    journals.value = data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
    } else {
      console.log(error as Error);
    }
  }
});
</script>
