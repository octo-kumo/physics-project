<template>
  <svg :viewBox="`0 0 1000 ${height}`">
    <path class="wave-slice major"
          :d="`M `+value1.map((v,i)=>`${i*1000/precision} ${(v+value2[i])*height/4+height/2}${i===precision-1?'':' L'}`).join(' ')"></path>
    <path class="wave-slice"
          :d="`M `+value1.map((v,i)=>`${i*1000/precision} ${v*height/4+height/2}${i===precision-1?'':' L'}`).join(' ')"></path>
    <path class="wave-slice"
          :d="`M `+value2.map((v,i)=>`${i*1000/precision} ${v*height/4+height/2}${i===precision-1?'':' L'}`).join(' ')"></path>
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
    offset: 0
  }),
  mounted() {
    anime({
      targets: this,
      offset: this.precision,
      duration: 10000,
      easing: 'easeInOutSine',
      autoplay: true,
      direction: 'alternate',
      loop: true
    });
    this.array = Array.from(Array(this.precision).keys())
        .map(i => i > this.precision / 5 ? 0 : sineWaveAt(i, this.precision / 10))
  },
  computed: {
    value1() {
      return this.array
          .map((v, i) => this.array[Math.max(Math.min(Math.floor(i - this.offset + this.precision / 5), this.precision - 1), 0)])
    },
    value2() {
      return this.array
          .map((v, i) => this.array[Math.max(Math.min(Math.floor(-this.precision + i + this.offset), this.precision - 1), 0)])
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