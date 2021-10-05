<template>
  <svg width="100%" style="max-width: 740px" viewBox="0, 0, 1000, 500" v-scroll="handleScroll">
    <g v-for="j in 12" :key="j">
      <circle class="protons" v-for="i in 25" :key="i" :cx="calculateX(i*40-20,j*40-10)"
              :cy="calculateY(i*40-20,j*40-10)"
              r="8" fill="#faa"></circle>
    </g>
    <circle :cx="pos*1000" cy="250" r="10" fill="#55f"></circle>
  </svg>
</template>
<script lang="ts">
import Vue from "vue";

const STRENGTH = 1000;
export default Vue.extend({
  data: () => ({
    pos: 0
  }),
  methods: {
    handleScroll() {
      this.pos = this.$el.getBoundingClientRect().y / window.visualViewport.height;
      this.pos = Math.max(Math.min(this.pos, 1), 0);
    },
    calculateX(x: number, y: number) {
      if (this.pos == 0 || this.pos == 1) return x;
      let dx = this.pos * 1000, dy = 250;
      dx -= x;
      dy -= y;
      let d = Math.hypot(dx, dy);
      dx *= Math.min(1, STRENGTH / (d * d));
      return x + dx;
    },
    calculateY(x: number, y: number) {
      if (this.pos == 0 || this.pos == 1) return y;
      let dx = this.pos * 1000, dy = 250;
      dx -= x;
      dy -= y;
      let d = Math.hypot(dx, dy);
      dy *= Math.min(1, STRENGTH / (d * d));
      return y + dy;
    }
  }
});
</script>