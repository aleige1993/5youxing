import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Main from './views/Main.vue';
import { getUserByStorage } from './utils/storage'

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/main',
      name: 'mainPage',
      component: Main,
      children: [
        {
          path: 'car',
          name: 'selectCar',
          component: () => import(/* webpackChunkName: "main" */ './views/SelectCar.vue'),
        },
        {
          path: 'mine',
          name: 'mine',
          component: () => import(/* webpackChunkName: "mine" */ './views/Mine.vue'),
          meta: { requiresAuth: true },
          children: [],
        },
      ],
      redirect: '/main/car',
    },
    {
      path: '/create',
      name: 'createOrder',
      component: () => import(/* webpackChunkName: "order" */ './views/CreateOrder.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/orderlist',
      name: 'orderlist',
      title: '我的租车订单',
      component: () => import(/* webpackChunkName: "order" */ './views/OrderList.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/orderDetail',
      name: 'orderDetail',
      title: '订单详情',
      component: () => import(/* webpackChunkName: "coupon" */ './views/OrderDetail.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/couponlist',
      name: 'couponlist',
      title: '我的优惠券',
      component: () => import(/* webpackChunkName: "coupon" */ './views/CouponList.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/fillinfo',
      name: 'fillinfo',
      title: '完善信息',
      component: () => import(/* webpackChunkName: "fill" */ './views/FillInfo.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/success',
      name: 'success',
      title: '下单成功',
      component: () => import(/* webpackChunkName: "fill" */ './views/OrderSuccess.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/successpay',
      name: 'successpay',
      title: '支付成功',
      component: () => import(/* webpackChunkName: "fill" */ './views/PaySuccess.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/',
      redirect: '/main',
    },
  ],
});

router.beforeEach((to, from, next) => {
  // console.log('router to: ', to);
  // console.log('router from: ', from);
  const user = getUserByStorage()
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!user.memberNo) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      })
      return
    }
    next();
  } else {
    next(); // 确保一定要调用 next()
  }
});

export default router;
