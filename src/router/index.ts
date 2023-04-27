import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home/home-index.vue';
import Detail from '../views/Home/post-detail.vue';
import store from '../store';



const routes: Array<RouteRecordRaw> = [

  // Auth start
  {
    path: '/login', name: 'login', component: () => import('../views/Login-Register/login-index.vue'),
    beforeEnter: (to, from, next) => {
      if (store.getters['auth/getUserToken']) {
        router.push({ name: 'home' });
        // console.log('stay');
      } else {
        console.log('change');
        next()

      }

    }
  },
  // Auth end


  {
    path: '/', name: 'home', component: Home, alias: ['/', '/home'],
    beforeEnter: (to, from, next) => {

      if (!store.getters['auth/getUserToken']) {
        router.push({ name: 'login' })
      } else {
        next()
      }
    }
  },
  { path: '/post/detail/:id', name: 'detail', component: Detail }


];



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   if (store.getters['auth/getUserToken']) {
//     next();
//   } else {
//     router.push({ name: 'login' })
//   }
// })

export default router
