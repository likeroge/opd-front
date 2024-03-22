import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: 'login',
        name: 'login',
        meta: { requiresAuth: false },
        component: () => import('pages/LoginPage.vue'),
      },
      {
        path: 'map',
        name: 'map',
        component: () => import('pages/map-page/map-page.vue'),
      },
      {
        path: 'journal',
        name: 'journal',
        component: () => import('pages/JournalPage/journal-page.vue'),
        children: [
          {
            path: '',
            name: 'journal',
            component: () =>
              import('pages/JournalPage/components/JournalsList.vue'),
          },
          {
            path: 'new',
            name: 'new',
            component: () =>
              import('pages/JournalPage/components/JournalForm.vue'),
          },
          {
            path: ':id',
            component: () =>
              import('pages/JournalPage/components/JournalItem.vue'),
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
