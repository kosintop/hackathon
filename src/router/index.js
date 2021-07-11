import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/tester/list',
    name: 'testerList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TesterList.vue')
  },
  {
    path: '/tester/buy',
    name: 'testerBuy',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TesterBuy.vue')
  },
  {
    path: '/tester/member',
    name: 'testerMember',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TesterMember.vue')
  },
  {
    path: '/corporate/projectList',
    name: 'corporateProjectList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CorporateProjectList.vue')
  },
  {
    path: '/corporate/testList',
    name: 'corporateTestList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CorporateTestList.vue')
  },
  {
    path: '/corporate/createProject',
    name: 'corporateProjectCreate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CorporateProjectCreate.vue')
  },
  {
    path: '/corporate/createTest',
    name: 'corporateTestCreate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CorporateTestCreate.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
