<template>
  <h4>Новая запись</h4>
  <form @submit="onSubmit">
    <q-input
      type="textarea"
      v-model="newJournalText"
      label="Текст записи"
      class="text-input"
      input-class="text-input"
      autogrow
    />
    <div class="column q-gutter-sm items-start">
      <q-btn type="submit" color="primary" label="Сохранить" />
      <BackButton />
    </div>
  </form>
</template>

<script setup lang="ts">
import { api } from 'src/boot/axios';
import { IJournal } from 'src/models/Journal';
import { onMounted, ref } from 'vue';
import BackButton from 'src/uikit/BackButton.vue';
import { useQuasar } from 'quasar';
import { AxiosError } from 'axios';

const newJournalText = ref('');
const $q = useQuasar();

const onSubmit = async (e: Event) => {
  e.preventDefault();
  try {
    await api.post('journal', {
      // user_id: Number(localStorage.getItem('userId')),
      text: newJournalText.value,
      department_id: 1,
    });
    $q.notify({
      message: 'Запись добавлена',
      color: 'green-14',
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
    }
    console.warn(error as Error);
  }
};

onMounted(async () => {
  try {
    const { data: journal } = await api.get<IJournal>('journal/last');
    newJournalText.value = journal.text;
  } catch (error) {
    console.warn(error);
  }
});
</script>

<style scoped lang="scss">
.text-input {
  border: 2px solid $blue;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>
