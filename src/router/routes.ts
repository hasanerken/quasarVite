import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/reporter', component: () => import('pages/ReporterPage.vue') },
      {
        path: '/articles',
        component: () => import('pages/Articles/ArticlesPage.vue'),
      },
      {
        path: '/articles/:id',
        component: () => import('pages/Articles/SingleArticle.vue'),
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
