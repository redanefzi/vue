import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
// import { BootstrapVue } from 'bootstrap-vue'
// Vue.use(BootstrapVue)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import ProductList from './components/ProductList.vue';
import CreateProduct from './components/CreateProduct.vue';
import vuetify from './plugins/vuetify';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {path: '/', component: ProductList},
    {path: '/create', component: CreateProduct}
  ],
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
