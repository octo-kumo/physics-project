<template>
  <svg width="100%" style="max-width: 740px" viewBox="0, 0, 500, 500">
    <text :x="pos*500" y="250" font-size="400" fill="#aaa4" dominant-baseline="central" text-anchor="middle"
          font-weight="bold">+
    </text>
    <text :x="pos*500" y="250" font-size="300" fill="#aaa9" dominant-baseline="central" text-anchor="middle">+
    </text>
    <g v-for="j in 12" :key="j">
      <g v-for="i in 12" :key="i"
         :transform="`translate(${calculate(i*40-10,j*40-10)})`">
        <circle class="protons" r="8" fill="#f77"></circle>
        <text font-size="32" fill="#000" dominant-baseline="central" text-anchor="middle">+</text>
      </g>
    </g>
    <circle :cx="pos*500" cy="250" r="10" fill="#55f"></circle>
    <text :x="pos*500" y="250" font-size="32" fill="#ffffff" dominant-baseline="central" text-anchor="middle">-</text>
  </svg>
</template>
<script lang="ts">
import Vue from "vue";

const STRENGTH = 100;
export default Vue.extend({
  props: {
    pos: {
      default: 0
    }
  },
  methods: {
    calculate(x: number, y: number) {
      let dx = this.pos * 500 - x, dy = 250 - y;
      let d = Math.hypot(dx, dy);
      let s = -STRENGTH * (2 - Math.pow(Math.atan(d), 2)) / d;
      dx *= Math.min(0.8, s);
      dy *= Math.min(0.8, s);
      return `${x + dx},${y + dy}`;
    },
  }
});
</script>