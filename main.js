import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'jquery'
import 'popper.js'
import 'bootstrap'
import './assets/app.scss';

// import { faFacebook } from '@fortawesome/free-brands-svg-icons'
// library.add(faFacebook)

//************ importa td componentes k nta bai usa ************* */
Vue.component('Navbar', require('./components/Layouts/Navbar.vue').default);
Vue.component('Footer', require('./components/Layouts/Footer.vue').default)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
