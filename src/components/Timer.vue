<template>
  <div
    :style="{ left: mouseCoord.mouseX + 'px', top : mouseCoord.mouseY + 'px' }"
    class="my-timer"
  >Время {{nCounter}}</div>
</template>

<script>
import moment from "moment";
import { fFinishHandler } from '../finishHandler';

export default {
  name: "Timer",
  data() {
    return {
      mouseCoord: {},
      nCounter: ""
    };
  }, // data
  props: ["timerIdx"],
  mounted() {
    // после монтиорвания запускаем таймер
    this.mouseCoord = { ...this.$store.state.mouseCoord };
    let eventTime = moment("Sun, 21 Apr 2013 13:00:30 GMT").unix();
    let currentTime = moment("Sun, 21 Apr 2013 13:00:00 GMT").unix();
    let diffTime = eventTime - currentTime;
    let duration = moment.duration(diffTime * 1000, "milliseconds");
    let interval = 10;
    let that = this;

    const t = setInterval(function() {
      duration = moment.duration(duration - interval, "milliseconds");
      // проверяем окончание
      if (duration > 0) {
        that.nCounter =
          duration.seconds() + ":" + duration.milliseconds();
      } else {
        clearInterval(t);
        that.nCounter = "вышло!";
        fFinishHandler(that.timerIdx);
      }
    }, interval);
  }, // mounted
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-timer {
  position: fixed;
  padding: 10px;
  color: #000;
}
</style>
