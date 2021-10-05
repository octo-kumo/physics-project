<template>
  <v-container fluid class="pa-0">
    <v-flex xs12 sm12>
      <v-parallax
        height="300"
        src="https://techhq.com/wp-content/uploads/2019/09/40645906341_c38b22d693_k.jpg"
      >
        <v-layout column align-center justify-center>
          <h1>Quantum Computer</h1>
        </v-layout>
      </v-parallax>
    </v-flex>

    <Foreword class="pa-10"></Foreword>

    <v-timeline class="pa-10">
      <v-timeline-item
        v-for="(year, i) in years"
        :key="i"
        :color="year.color"
        small
      >
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold ${year.color}--text`"
            v-text="year.year"
          ></span>
        </template>
        <div class="py-4">
          {{ year.text }}
        </div>

        <v-layout align-end>
          <v-img 
          v-if="year.img"
          max-height="300"
          max-width="273"
          :src="year.img"
        ></v-img>
        </v-layout>
        
      </v-timeline-item>
    </v-timeline>

    <Computer id="computer" class="pa-10"></Computer>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Computer from "../markdowns/quantum_computer.md";
import Foreword from "../markdowns/computer_foreword.md";

export default Vue.extend({
  name: "Home",

  components: {
    Foreword,
    Computer,
  },

  data: () => ({
    years: [
      {
        color: "cyan",
        year: "1980",
        text: "Physicist Paul Benioff proposed a quantum mechanical model of the Turing machine",
      },
      {
        color: "green",
        year: "1981",
        text: "Richard Feynman and Paul Benioff proposed a basic model for a quantum computer",
        img: "https://caltech-prod.s3.amazonaws.com/main/images/feynman01-NEWS-WEB.width-600_tSwRQP5.jpg",
      },
      {
        color: "pink",
        year: "1985",
        text: "David Deutsch proposed the first universal quantum Turing machine and paved the way to the quantum circuit model",
      },
      {
        color: "amber",
        year: "1994",
        text: "Peter Shor developed a quantum algorithm for factoring integers with the potential to decrypt RSA-encrypted communications",
        img: "https://i.ytimg.com/vi/hOlOY7NyMfs/maxresdefault.jpg",
      },
      {
        color: "orange",
        year: "1996",
        text: "Lov Grover, at Bell Labs, invents the quantum database search algorithm (Grover's Algorithm).",
      },
      {
        color: "teal",
        year: "2019",
        text: "IBM unveils its first commercial quantum computer, the IBM Q System One with 27 qubits.",
        img: "https://cdn.vox-cdn.com/thumbor/xANXGDNHPq0lYOh0hmEPFndU3ZY=/0x0:4000x4000/1400x933/filters:focal(1686x1939:2326x2579):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62805283/46602874791_c009b3def8_o.0.jpg",
      },
    ],
  }),
});
</script>
<style>
#computer img {
  max-width: 100%;
}

.hover-text {
  display: none;
}

.hover-text:hover {
  display: block;
}
</style>
