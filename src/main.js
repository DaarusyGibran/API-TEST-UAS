import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as firebase from 'firebase'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

// Your web app's Firebase configuration
const configOptions = {
  apiKey: 'AIzaSyDzwBYR4rbqgsXAdP7x798jqP2iVhmRYvQ',
  authDomain: 'vue-firebase-auth-81a96.firebaseapp.com',
  databaseURL: 'https://vue-firebase-auth-81a96.firebaseio.com',
  projectId: 'vue-firebase-auth-81a96',
  storageBucket: 'vue-firebase-auth-81a96.appspot.com',
  messagingSenderId: '890091450627',
  appId: '1:890091450627:web:40f15a579b28303079f936'
}
// Initialize Firebase(Sign in sign out)
firebase.initializeApp(configOptions)

firebase.auth().onAuthStateChanged(user => {
  store.dispatch('fetchUser', user)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
