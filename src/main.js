
import Vue from 'vue';
import { store } from './store';

import App from "./App.vue";

// координаты указателя записываются в store
const fHandleMouseMove = (e) => {    
  store.commit('setMouseCoord', {
    mouseX: e.clientX,
    mouseY: e.clientY,
  });   
}
document.onmousemove = fHandleMouseMove;



Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
