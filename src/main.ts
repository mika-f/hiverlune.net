// global
import * as tslib from 'tslib';

import Vue from 'vue';
import VueRouter from 'vue-router';

import './styles/main.scss';

import Contents from './components/Contents.vue';
import Grid from './components/Grid.vue';
import Group from './components/Group.vue';
import Home from './components/Home.vue';
import IconLabel from './components/IconLabel.vue';
import LinkedIconLabel from './components/LinkedIconLabel.vue';
import RoundedImage from './components/RoundedImage.vue';

Vue.use(VueRouter);
Vue.component('contents', Contents);
Vue.component('grid', Grid);
Vue.component('group', Group);
Vue.component('icon-label', IconLabel);
Vue.component('linked-icon-label', LinkedIconLabel);
Vue.component('rounded-image', RoundedImage);

const router = new VueRouter({
  routes: [
    { path: '/', component: Home }
  ]
});

const vue = new Vue({
  render: (w) => w(Home),
  router,
});
vue.$mount('#root');
