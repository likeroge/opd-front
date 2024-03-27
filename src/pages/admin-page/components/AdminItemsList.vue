<template>
  <h4>Админка</h4>
  <div class="row q-gutter-lg">
    <div
      @click="router.push('/admin/database')"
      class="admin-list-item shadow-2 rounded-borders q-pa-md cursor-pointer"
    >
      <p class="text-center text-h6">База данных</p>
      <div class="row justify-center">
        <q-icon class="" name="table_rows" size="100px" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<style lang="scss" scoped>
.admin-list-item {
  width: 200px;
  height: 200px;
  background-color: #fff;
}
</style>
