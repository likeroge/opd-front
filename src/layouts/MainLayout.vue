<template>
  <q-layout view="hHr lpR ffr">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> OCC VDA Portal </q-toolbar-title>

        <div>v 0.0.1</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-drawer side="right" v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Меню </q-item-label>
        <q-item>VDA</q-item>
      </q-list>
    </q-drawer>
    <q-footer elevated>
      <q-toolbar
        >© 2024 Центр Управления Воздушными Перевозками АК "Волга-Днепр"
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
