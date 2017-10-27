import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(VueAxios, axios);

import App from './components/App.vue'
import DisplayItem from './components/items/DisplayItem.vue'
import CreateItem from './components/items/CreateItem.vue'
import EditItem from './components/items/EditItem.vue'

const routes = [
    {
        name: 'DisplayItem',
        path: '/',
        component: DisplayItem
    },
    {
        name: 'CreateItem',
        path: '/items/create',
        component: CreateItem
    },
    {
        name: 'EditItem',
        path: '/edit/:id',
        component: EditItem
    }
];

const router = new VueRouter({mode: 'history', routes: routes});
new Vue(Vue.util.extend({ router }, App)).$mount('#app');