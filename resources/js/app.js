
require('./bootstrap');
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import {routes} from './routes';
import StoreData from './store';

import {initialize} from "./helpers/general";

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store(StoreData);

const router = new VueRouter({
    routes,
    mode: "history"
});

initialize(store, router);

Vue.component('main-app', require('./components/MainApp.vue').default);

const app = new Vue({
    el: '#app',
    router,
    store,
});
