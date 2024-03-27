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
        <q-item-label class="text-h6" header> Меню </q-item-label>
        <q-item
          active-class="my-menu-link"
          :active="link === 'home'"
          @click="link = 'home'"
          clickable
          to="/"
          >Главная</q-item
        >
        <q-item
          active-class="my-menu-link"
          :active="link === 'journal'"
          @click="link = 'journal'"
          clickable
          to="/journal"
          >ЖПС</q-item
        >
        <q-item
          active-class="my-menu-link"
          :active="link === 'map'"
          @click="link = 'map'"
          clickable
          to="/map"
          >Карта</q-item
        >
        <q-item
          active-class="my-menu-link"
          :active="link === 'admin'"
          @click="link = 'admin'"
          clickable
          to="/admin"
          >Админка</q-item
        >
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
const link = ref('home');

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

<style lang="scss" scoped>
.my-menu-link {
  color: white;
  // border-bottom: 2px solid #1976d2;
  // border-top: 2px solid #1976d2;
  background: #1976d2;
}
</style>
