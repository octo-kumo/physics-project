<template>
  <svg :viewBox="`0 0 1000 ${height}`">
    <path ref="comp" class="wave-slice major" :d="d1"></path>
    <path ref="g1" class="wave-slice" :d="d2"></path>
    <path ref="g2" class="wave-slice" :d="d3"></path>
  </svg>
</template>

<script>
import Vue from 'vue';
import anime from 'animejs';

function sineWaveAt(sampleNumber, sampleFreq) {
  return Math.sin(Math.PI * 2 * sampleNumber / sampleFreq)
}

export default Vue.extend({
  name: "wave_composite",
  props: [],
  data: () => ({
    precision: 1000,
    array: [],
    height: 200,
    offset: 0,
    d1: "", d2: "", d3: ""
  }),
  mounted() {
    const self = this;
    anime({
      targets: this,
      offset: this.precision,
      duration: 10000,
      easing: 'easeInOutSine',
      autoplay: true,
      direction: 'alternate',
      loop: true,
      update() {
        let a = 'M', b = 'M', c = 'M';
        for (let i = 0; i < self.precision; i++) {
          a += `${i * 1000 / self.precision} ${(self.v(i)) * self.height / 4 + self.height / 2}${i === self.precision - 1 ? '' : ' L'}`;
          b += `${i * 1000 / self.precision} ${(self.v1(i)) * self.height / 4 + self.height / 2}${i === self.precision - 1 ? '' : ' L'}`;
          c += `${i * 1000 / self.precision} ${(self.v2(i)) * self.height / 4 + self.height / 2}${i === self.precision - 1 ? '' : ' L'}`;
        }
        self.d1 = a;
        self.d2 = b;
        self.d3 = c;
      }
    });
    this.array = Array.from(Array(this.precision).keys())
        .map(i => i > this.precision / 5 ? 0 : sineWaveAt(i, this.precision / 10))
  },
  methods: {
    v(i) {
      return this.v1(i) + this.v2(i);
    },
    v1(i) {
      return this.array[Math.max(Math.min(Math.floor(i - this.offset + this.precision / 5), this.precision - 1), 0)];
    },
    v2(i) {
      return this.array[Math.max(Math.min(Math.floor(-this.precision + i + this.offset), this.precision - 1), 0)];
    }
  }
});
</script>

<style scoped>

.wave-slice {
  fill: none;
  stroke: white;
  stroke-width: 1px;
  stroke-dasharray: 4;
}

.major {
  stroke-width: 2px;
  stroke-dasharray: 0;
}
</style>