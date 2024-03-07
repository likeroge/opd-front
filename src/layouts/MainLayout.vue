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
        <q-btn
          class="q-mr-sm"
          size="sm"
          color="red-5"
          label="Logout"
          @click="onLogout"
        />
        <div>v 0.0.1</div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-drawer side="right" v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header> Меню </q-item-label>
        <q-item clickable to="/">Главная</q-item>
        <q-item clickable to="/journal">ЖПС</q-item>
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
import { useRoute, useRouter } from 'vue-router';

// const route = useRoute();
// const router = useRouter();
// console.log(route.query);
// console.log(route.query.code);

const leftDrawerOpen = ref(false);

const router = useRouter();

const onLogout = () => {
  console.log('logout');
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  router.push('/login');
};

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
