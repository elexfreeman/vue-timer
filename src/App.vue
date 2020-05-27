<template>
  <div id="app" v-on:click="onMouseClick()">  
    Кликните по квадрату чтобы запустить таймер.  
    <div class="timer-list">
      <Timer :timerIdx="k" v-for="(t, k) in aTimer" :key="k"/>
    </div>
  </div>
</template>

<script>
import MouseCoord from "./components/MouseCoord";
import Timer from "./components/Timer";
export default {
  name: "App",
  computed: {
    aTimer() {
      return this.$store.state.aTimer;
    }
  },
  methods: {
    onMouseClick() {
      const aTimer = this.$store.state.aTimer;
      aTimer.push(aTimer.length);
      this.$store.commit("setATimer", aTimer);
    }
  },
  components: {
    MouseCoord,
    Timer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #fff;
  border: 1px solid #ddd;
  width: 400px;
  height: 400px;
}
</style>
