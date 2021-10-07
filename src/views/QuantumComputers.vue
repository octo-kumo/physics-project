<template>
  <v-container fluid class="pa-0">
    <v-flex xs12 sm12>
      <v-parallax height="200" src="@/assets/computer_bg.jpg">
        <v-layout column align-center justify-center>
          <h1 id="main-title">Quantum Computer</h1>
        </v-layout>
      </v-parallax>
    </v-flex>

    <v-container>
      <v-card
        style="transition: box-shadow 0.5s"
        class="pa-4"
        align="center"
        :elevation="hover ? 10 : 0"
      >
        <v-card-title class="justify-center"> History </v-card-title>
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

            <v-img
              v-if="year.img"
              max-height="300"
              max-width="273"
              :src="year.img"
            ></v-img>
          </v-timeline-item>
        </v-timeline>
      </v-card>

      <Intro id="intro"></Intro>

      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header> Note </v-expansion-panel-header>
          <v-expansion-panel-content>
            There are also other ways of representing qubit states, such as the
            polarization of a photon (horizontal or vertical), or the spin of a
            nuclei (1/2 or -1/2)
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <QubitStates />

      <v-container fluid class="pa-0">
        <v-row no-gutters align="stretch">
          <v-col align="center" justify="center">
            <v-card class="pa-2" outlined tile>
              <v-img contain max-width="200" :src="parts[page - 1].img" />
            </v-card>
          </v-col>
          <v-col class="d-flex">
            <v-card class="pa-2" outlined tile>
              <v-card-title>{{ parts[page - 1].title }}</v-card-title>
              <v-card-text>{{ parts[page - 1].desc }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row no-gutters align="center" justify="center" class="pt-2">
          <v-pagination v-model="page" :length="6"></v-pagination>
        </v-row>
      </v-container>

      <Computer id="computer"></Computer>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header> Note </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card> </v-card>
            <GroverNote id="note"></GroverNote>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <QuantumFuture />
    </v-container>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Computer from "../markdowns/quantum_computer.md";
import Intro from "../markdowns/computer_intro.md";
import GroverNote from "../markdowns/grover_note.md";
import QubitStates from "../markdowns/qubit_states.md";
import QuantumFuture from "../markdowns/future_quantum_computer.md"

export default Vue.extend({
  name: "Quantum Computer",

  components: {
    Intro,
    Computer,
    GroverNote,
    QubitStates,
    QuantumFuture,
  },

  data: () => ({
    page: 1,

    parts: [
      {
        title: "Anatomy",
        desc: "There are many setups for a quantum computer. Here's the dilution refrigerator setup, which is quite commonly used.",
        img: require("@/assets/anatomy.png"),
      },

      {
        title: "Shell",
        desc: "It is installed to isolate the system from the rest of the environment. It helps to maintain the low temperature and shield the internal components from any stray electromagnetic waves",
        img: require("@/assets/shell.png"),
      },
      {
        title: "Plates",
        desc: " The plates hold all the components in place so that they can decrease in temperature. From top to bottom, the plates decrease in temperature from ~4 Kelvin at the topmost plate to ~0.15K at the bottom most plate (Colder than the temperature in outer space)",
        img: require("@/assets/plates.png"),
      },
      {
        title: "Mixing Chamber",
        desc: "In the chamber, helium-3 and helium-4 are mixed together, such that they act as a cooling system to conduct heat away from the processor to allow it to operate at temperatures as low as 0.15 K.",
        img: require("@/assets/mixing_chamber.png"),
      },
      {
        title: "Cables and Connectors",
        desc: "These cables carries signals that are read from the quantum processor, they are cooled to superconducting states in order to minimize energy loss while transmitting data",
        img: require("@/assets/cables.png"),
      },
      {
        title: "Cryoperm Shield",
        desc: "The shield houses the quantum processor where the quibts are located and also blocks any external electromagnetic radiation from interfering with the processor",
        img: require("@/assets/shield.png"),
      },
    ],

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

.carousel-inner > .item {
  height: 400px;
}

#main-title {
  padding: 1em 2em;
  backdrop-filter: blur(10px) brightness(60%);
}
</style>
