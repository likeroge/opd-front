<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
  <q-page padding>
    <div class="row justify-end">
      <q-btn
        v-if="router.currentRoute.value.path === '/tankering'"
        label="Калькулятор танкирования"
        class="q-mb-sm q-mr-sm"
        to="/tankering/calculator"
        color="green-14"
      />
    </div>
    <router-view />
  </q-page>
</template>
