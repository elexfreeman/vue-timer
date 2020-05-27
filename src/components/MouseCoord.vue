<template>
  <div class="my-mouse-coord">
    Mouse
  {{mouseCoord}}
    
  </div>
</template>

<script>
export default {
  name: "MouseCoord",
  props: [],
  mounted() {
  }, // mounted

  computed: {
    mouseCoord(){
      return this.$store.state.mouseCoord;        
    }
  }
};
</script>

<style scoped>
  .my-mouse-coord{
    padding: 10px;
  }
</style>
