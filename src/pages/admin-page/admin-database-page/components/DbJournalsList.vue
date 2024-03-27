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
        name: 'user_id',
        label: 'User ID',
        field: 'user_id',
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
      {
        name: 'department',
        label: 'Служба',
        align: 'center',
        field: 'department',
        sortable: false,
      },
    ]"
    :rows="journals"
  />
  <BackButton />
</template>

<script setup lang="ts">
import BackButton from '/src/uikit/BackButton.vue';
import { api } from 'src/boot/axios';
import { onMounted, ref } from 'vue';
const journals = ref([]);
const isLoaded = ref(false);
onMounted(async () => {
  const { data } = await api.get('/journal/all');
  journals.value = data;
  // journals.value = data.map((user: any) => {
  //   return {
  //     ...user,
  //     fullName: user.first_name + ' ' + user.last_name,
  //   };
  // });
  console.log(data);
  isLoaded.value = true;
});
</script>
