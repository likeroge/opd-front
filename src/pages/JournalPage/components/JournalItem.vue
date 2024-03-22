<template>
  <h5>Запись № {{ journalNumber }}</h5>
  <p class="journal-text">{{ journalText }}</p>
  <BackButton />
</template>

<script setup lang="ts">
import { api } from 'src/boot/axios';
import { IJournal } from 'src/models/Journal';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import BackButton from 'src/uikit/BackButton.vue';

const journalNumber = ref(null as number | null);
const journalText = ref(null as string | null);

const route = useRoute();

onMounted(async () => {
  const { data } = await api.get<IJournal>(`journal/find/${route.params.id}`);
  journalNumber.value = data.id;
  journalText.value = data.text;
});
</script>

<style scoped lang="scss">
.journal-text {
  white-space: pre-line;
}
</style>
