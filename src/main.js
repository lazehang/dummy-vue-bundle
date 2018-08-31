// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import productCard from './components/ProductCard.vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

/* eslint-disable no-new */
var g = document.createElement('div');
g.setAttribute("id", "undone-app");

let hasProductWrapper = false;
if (document.getElementsByClassName('product-sec1')[0]) {
  var productWrapper = document.getElementsByClassName('product-sec1')[0]
  productWrapper.insertBefore(g, productWrapper.lastElementChild)
  hasProductWrapper = true;
} else {
  document.body.appendChild(g)
}
new Vue({
  el: '#undone-app',
  components: { App },
  template: '<App />',
})

// new Vue({
//   el: '.product-sec1',
//   components: { productCard },
//   template: '<productCard />'
// })
