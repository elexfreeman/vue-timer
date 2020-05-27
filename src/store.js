import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    // массив таймеров
    aTimer: [],
    // координаты аказателя
    mouseCoord: {
      mouseX: 0,
      mouseY: 0,
    }
  },
  mutations: {
    setATimer(state, data) {
      state.aTier = data;
    },
    setMouseCoord(state, data) {
      state.mouseCoord = data;
    },
  }
})