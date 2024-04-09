<template>
  <q-spinner v-if="isLoaded === false" />
  <q-table
    :columns="[
      {
        name: 'number',
        label: 'ID',
        field: 'id',
        align: 'left',
        sortable: false,
      },
      {
        name: 'email',
        label: 'Email',
        field: 'email',
        align: 'center',
        sortable: false,
      },
      {
        name: 'fullName',
        label: 'ФИО',
        field: 'fullName',
        align: 'center',
        sortable: false,
      },
      {
        name: 'department',
        label: 'Служба',
        align: 'center',
        field: 'department_id',
        sortable: false,
      },
    ]"
    :rows="users"
  />
  <BackButton />
</template>

<script setup lang="ts">
import { api } from 'src/boot/axios';
import BackButton from 'src/uikit/BackButton.vue';
import { onMounted, ref } from 'vue';
const users = ref([]);

const isLoaded = ref(false);
onMounted(async () => {
  const { data } = await api.get('/user/all');
  users.value = data.map((user: any) => {
    return {
      ...user,
      fullName: user.first_name + ' ' + user.last_name,
    };
  });
  isLoaded.value = true;
});
</script>
