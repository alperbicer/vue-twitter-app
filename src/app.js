import Vue from 'vue'
import AppLayout from './theme/Layout.vue'
import router from './router'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyBxu3G2_iZA711TSdEAzghB75aqziUmRgg',
  authDomain: 'data-f3330.firebaseapp.com',
  databaseURL: 'https://data-f3330.firebaseio.com',
  projectId: 'data-f3330',
  storageBucket: 'data-f3330.appspot.com',
  messagingSenderId: '384151073826'
})

const app = new Vue({
  router,
  ...AppLayout
})

export { app, router }
