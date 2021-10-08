<template>
  <svg width="100%" style="max-width: 740px" viewBox="0, 0, 500, 500">
    <g v-for="i in parseInt(n)" :key="'te'+i">
      <text :x="pos*500*(2-1/n)-(i-1)*500/n" y="250" font-size="400" fill="#aaa4" dominant-baseline="central"
            text-anchor="middle"
            font-weight="bold">+
      </text>
    </g>
    <g v-for="j in 12" :key="j">
      <g v-for="i in 12" :key="j*i"
         :transform="calculate(i*40-10,j*40-10)">
        <circle class="protons" r="12" fill="#f77"></circle>
        <text font-size="32" fill="#000" dominant-baseline="central" text-anchor="middle">+</text>
      </g>
    </g>
    <g v-for="i in parseInt(n)" :key="'ve'+i">
      <circle :cx="pos*500*(2-1/n)-(i-1)*500/n" cy="250" r="15" fill="#55f"></circle>
      <text :x="pos*500*(2-1/n)-(i-1)*500/n" y="250" font-size="32" fill="#ffffff" dominant-baseline="central"
            text-anchor="middle">-
      </text>
    </g>
  </svg>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "attraction",
  props: {
    strength: {
      default: 100
    },
    pos: {
      default: 0
    },
    n: {
      default: 1
    }
  },
  methods: {
    calculate(x: number, y: number) {
      let X = x, Y = y;
      for (let i = 0; i < this.n; i++) {
        let dx = this.pos * 500 * (2 - 1 / this.n) - i * 500 / this.n - x, dy = 250 - y;
        let d = Math.hypot(dx, dy);
        let s = -this.strength * (2 - Math.pow(Math.atan(d), 2)) / d;
        X += dx * s;
        Y += dy * s;
      }
      return `translate(${X},${Y})`;
    },
  }
});
</script>