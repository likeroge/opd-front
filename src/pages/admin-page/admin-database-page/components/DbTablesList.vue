<template>
  <q-spinner v-if="isLoaded === false" />
  <q-table
    v-if="isLoaded === true"
    @row-click="onTableRowClick"
    :rows="dataRows"
    row-key="name"
    :rows-per-page-label="'Записи на странице'"
    :columns="[
      {
        name: 'number',
        label: '№',
        field: 'id',
        align: 'left',
        sortable: false,
      },
      {
        name: 'tableName',
        label: 'Таблица БД',
        field: 'name',
        align: 'center',
        sortable: false,
      },
      {
        name: 'count',
        label: 'Количество записей',
        align: 'center',
        field: 'count',
        sortable: false,
      },
    ]"
  />
  <BackButton v-if="isLoaded === true" />
</template>

<script setup lang="ts">
import BackButton from 'src/uikit/BackButton.vue';
import { api } from 'src/boot/axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { promises } from 'dns';

const router = useRouter();

const journalsCount = ref(0);
const usersCount = ref(null);
const departmentsCount = ref(null);
const isLoaded = ref(false);

const dataRows = ref([
  { name: 'users', count: usersCount, id: 1 },
  { name: 'journals', count: journalsCount, id: 2 },
  { name: 'departments', count: departmentsCount, id: 3 },
]);

const onTableRowClick = (_: Event, row: any) => {
  router.push('/admin/database/' + row.name.slice(0, -1));
};

onMounted(() => {
  const promise1 = api.get('/journal/count').then((res) => {
    journalsCount.value = res.data;
  });
  const promise2 = api.get('/user/count').then((res) => {
    usersCount.value = res.data;
  });
  const promise3 = api.get('/department/count').then((res) => {
    departmentsCount.value = res.data;
  });
  Promise.all([promise1, promise2, promise3]);
  isLoaded.value = true;
});
</script>
