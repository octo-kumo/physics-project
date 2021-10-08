<template>
  <kinesis-container
      event="move">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0"
         width="100%" style="max-width: 600px" viewBox="0, 0, 957, 595.83">
      <g id="Layer_1">
        <g>
          <path d="M761.292,289.5 L616.146,229.251" fill-opacity="0" stroke="#A3A3A3" stroke-width="6"/>
          <path d="M616.146,229.251 L622.14,225.243 L605.062,224.65 L617.54,236.326 z" fill="#A3A3A3" fill-opacity="1"
                stroke="#A3A3A3" stroke-width="6" stroke-opacity="1"/>
        </g>
        <g>
          <path d="M250.292,223.5 L248.436,416.501" fill-opacity="0" stroke="#A3A3A3" stroke-width="6"/>
          <path d="M248.436,416.501 L242.475,412.443 L248.32,428.5 L254.474,412.559 z" fill="#A3A3A3" fill-opacity="1"
                stroke="#A3A3A3" stroke-width="6" stroke-opacity="1"/>
        </g>
        <path d="M9.5,9.5 L9.5,514.5 L948.5,514.5" fill-opacity="0" stroke="#656565" stroke-width="4"/>
        <text transform="matrix(1, 0, 0, 1, 763.765, 311.83)">
          <tspan x="-121.913" y="8" font-size="41" fill="#656565">Linear region</tspan>
        </text>
        <text transform="matrix(1, 0, 0, 1, 781.765, 562.83)">
          <tspan x="-118.101" y="8" font-size="41" fill="#656565">Temperature</tspan>
        </text>
        <text transform="matrix(1, 0, 0, 1, 258.265, 172.915)">
          <tspan x="-199.752" y="-20.085" font-size="41" fill="#656565">Region dominated
            by
          </tspan>
          <tspan x="-172.712" y="35.915" font-size="41" fill="#656565">constant
            resistivity
          </tspan>
        </text>
        <path ref="target"
              d="M9.5,441.5 L299.292,441.5 M299.292,441.5 C332.292,440.5 413.292,424.5 444.292,390.5"
              fill-opacity="0" stroke="#C81919"
              stroke-width="4"/>
        <path d="M444.292,390.5 L761.292,29.5" fill-opacity="0" stroke="#C81919" stroke-width="4"/>
        <text transform="matrix(1, 0, 0, 1, 20, 500)">
          <tspan x="0" font-size="41" fill="#668">{{ state }}</tspan>
        </text>
      </g>
    </svg>
  </kinesis-container>
</template>
<script lang="ts">
import Vue from "vue";
import anime from 'animejs/lib/anime.es.js';

let shapes = [
  "M 290 514.5 L 299.292 441.5 M 299.292 441.5 C 301 429 413.292 424.5 444.292 390.5",
  "M9.5,441.5 L299.292,441.5 M299.292,441.5 C332.292,440.5 413.292,424.5 444.292,390.5"
]

export default Vue.extend({
  name: "resis-graph",
  props: {
    pos: Number
  },
  data: () => ({
    animation: anime()
  }),
  mounted() {
    this.animation = anime({
      targets: this.$refs.target,
      d: [
        {value: shapes[0], duration: 500},
        {value: shapes[1], duration: 500},
      ],
      duration: 1000,
      easing: 'linear',
      autoplay: false
    })
  },
  watch: {
    pos(n: number) {
      this.animation.seek(0.5 * this.animation.duration * n);
    }
  },
  computed: {
    state() {
      return this.pos > 0.6 ? "Superconductor" : "Normal Conductor";
    }
  }
});
</script>