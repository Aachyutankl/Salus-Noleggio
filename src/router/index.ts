import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue';
import login from '../pages/login.vue';
import signup from '../pages/signup.vue';
import forgot from '../pages/forgot-password.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: login,
    children: [
      {
        path: '',
        redirect: '/login/loginUserPage'
      },
      {
        path: 'loginUserPage',
        component: () => import('@/pages/loginUserPage.vue')
      },
      {
        path: 'loginAdminPage',
        component: () => import('@/pages/loginAdminPage.vue')
      },
    ]
  },
  {
    path: '/signup',
    component: signup,
    // component: () => import('@/pages/signup.vue')
  },
  {
    path: '/forgot',
    component: forgot,
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      /* User component */
      /* {
        path: 'tab1',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Document.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/New-request.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/views/Chat.vue')
      },
      {
        path: 'tab5',
        component: () => import('@/views/Settings.vue')
      } */
      /* Admin component */
      {
        path: 'tab1',
        component: () => import('@/views/AdminHome.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/AdminUser.vue'),
        children: [
          {
            path: '',
            redirect: '/tabs/tab2/userPageTab'
          },
          {
            path: 'userPageTab',
            component: () => import('@/views/userPageTab.vue')
          },
          {
            path: 'approvalPageTab',
            component: () => import('@/views/approvalPageTab.vue')
          },
        ]
      },
      {
        path: 'tab3',
        component: () => import('@/views/AdminProduct.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/views/AdminChat.vue')
      },
      {
        path: 'tab5',
        component: () => import('@/views/AdminSettings.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
