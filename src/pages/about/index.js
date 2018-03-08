import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './index.vue'
let routes = [
    {
        path: '/',
        component: index
    }
];
let router = new VueRouter({
    mode: "history",
    routes
})
new Vue({
    render: h => h(index),
    router
}).$mount('#app');
