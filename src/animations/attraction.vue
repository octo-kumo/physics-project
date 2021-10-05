<template>
  <svg width="100%" style="max-width: 740px" viewBox="0, 0, 1000, 500" v-scroll="handleScroll">
    <text :x="pos*1000" y="250" font-size="400" fill="#aaa4" dominant-baseline="central" text-anchor="middle"
          font-weight="bold">+
    </text>
    <text :x="pos*1000" y="250" font-size="300" fill="#aaa9" dominant-baseline="central" text-anchor="middle">+
    </text>
    <g v-for="j in 12" :key="j">
      <g v-for="i in 25" :key="i"
         :transform="`translate(${calculateX(i*40-20,j*40-10)} ${calculateY(i*40-20,j*40-10)})`">
        <circle class="protons" r="8" fill="#f77"></circle>
        <text font-size="32" fill="#000" dominant-baseline="central" text-anchor="middle">+</text>
      </g>
    </g>
    <circle :cx="pos*1000" cy="250" r="10" fill="#55f"></circle>
    <text :x="pos*1000" y="250" font-size="32" fill="#ffffff" dominant-baseline="central" text-anchor="middle">-</text>
  </svg>
</template>
<script lang="ts">
import Vue from "vue";

const STRENGTH = 5000;
export default Vue.extend({
  data: () => ({
    pos: 0
  }),
  methods: {
    handleScroll() {
      let p = Math.max(Math.min(this.$el.getBoundingClientRect().y / window.visualViewport.height, 1), 0);
      if (p == 0 || p == 1) return;
      this.pos = p;
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