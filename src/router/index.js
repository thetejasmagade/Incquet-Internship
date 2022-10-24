import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductListingView from '../views/ProductListingView.vue'
import SearchListingView from '../views/SearchListingView.vue'
import ProductView from '../views/ProductView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'productlisting',
    component: ProductListingView,
  },
  {
    path: '/products/:searchQuery',
    name: 'searchlisting',
    component: SearchListingView,
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductView
  }
]

const router = new VueRouter({
  routes
})

export default router
