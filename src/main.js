import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue, {
  BIconAlarm,
  BIconLockFill
} from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import {
  VBHoverPlugin,
  VBPopoverPlugin,
  NavbarPlugin,
  AspectPlugin,
  ModalPlugin,
  NavPlugin,
  BIcon,
  VBTogglePlugin,
  CardPlugin,
  SpinnerPlugin,
  IconsPlugin,
  TabsPlugin,
  CarouselPlugin,
  CalendarPlugin
} from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2'
import Axios from 'axios'

Vue.use(CarouselPlugin)
Vue.use(TabsPlugin)
Vue.use(VueSweetalert2)
Vue.prototype.$http = Axios
Vue.prototype.$id = localStorage.getItem('Id')
Vue.prototype.$name = localStorage.getItem('name')

Vue.use(SpinnerPlugin)
Vue.use(CardPlugin)
Vue.use(VBTogglePlugin)
Vue.use(BootstrapVue)
Vue.use(ModalPlugin)
Vue.use(AspectPlugin)
Vue.use(NavbarPlugin)
Vue.use(VBPopoverPlugin)
Vue.use(VBHoverPlugin)
Vue.use(NavPlugin)
Vue.use(IconsPlugin)
Vue.use(CalendarPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
