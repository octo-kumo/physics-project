<template>
  <v-container fluid class="pa-0">
    <v-flex xs12 sm12>
      <v-parallax height="200" src="@/assets/physics_img.jpg">
        <v-layout column align-center justify-center>
          <h1 id="main-title" class="rounded">Quantum Physics</h1>
        </v-layout>
      </v-parallax>
    </v-flex>
    <v-container>
      <v-card
        style="transition: box-shadow 0.5s"
        rounded
        class="mb-10"
        :elevation="hover ? 10 : 0"
      >
          <v-card-text>
            <SuperPrin />
          </v-card-text>
          <v-layout>
            <v-img
              src="@/assets/superpos_waves.gif"
            ></v-img>
          </v-layout>
      </v-card>
      <v-card
        style="transition: box-shadow 0.5s"
        rounded
        class="mb-10"
        :elevation="hover ? 10 : 0"
      >
        <v-row>
          <v-col cols="12" sm="6" md="8" lg="9">
            <v-card-title>Quantum State</v-card-title>
            <v-card-text>
              <QuantState />
            </v-card-text>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" class="pa-0">
            <kinesis-container event="move">
              <kinesis-element type="depth" :strength="20" axis="x">
                <v-img max-height="100%" src="@/assets/state_img.png"></v-img>
              </kinesis-element>
            </kinesis-container>
          </v-col>
        </v-row>
      </v-card>
      <v-card
        style="transition: box-shadow 0.5s"
        rounded
        class="mb-10"
        :elevation="hover ? 10 : 0"
      >
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="4" class="pa-0">
            <kinesis-container event="move">
              <kinesis-element type="depth" :strength="30" axis="x">
                <v-img
                  max-height="100%"
                  src="https://lh5.googleusercontent.com/d3hfjkLFmA5-Kx07UoC3QZ0w3hvbb5JfvTOd6hLo3FsE5i4tW7lMG_lIsYq1-FIi86QK9oKO56rEfI5fuMTUQtzLy_AJXCOGIN2Jta2aFFJWmKSmFprCK87ngJr8BWTUDJdvL5-4=s0"
                ></v-img>
              </kinesis-element>
            </kinesis-container>
          </v-col>
          <v-col cols="12" sm="6" md="7" lg="7">
            <v-card-title>Quantum Superposition</v-card-title>
            <v-card-text>
              <QuantSuper />
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
      <QuantEntag />
      <v-card
        style="transition: box-shadow 0.5s"
        rounded
        class="mb-10"
        :elevation="hover ? 10 : 0"
      >
        <v-row>
          <v-col cols="12" sm="6" md="7" lg="7">
            <v-card-title>Schrödinger's cat</v-card-title>
            <v-card-text>
              <SchrCat />
            </v-card-text>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="4" class="pa-0">
            <kinesis-container event="move">
              <kinesis-element type="depth" :strength="30" axis="x">
                <v-img
                  max-height="100%"
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Schrodingers_cat.svg"
                ></v-img>
              </kinesis-element>
            </kinesis-container>
          </v-col>
        </v-row>
      </v-card>
    </v-container>

    <h1>Quiz</h1>
    <Quiz v-model="questions" />
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header> About </v-expansion-panel-header>
        <v-expansion-panel-content>
          <About />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header> Sources </v-expansion-panel-header>
        <v-expansion-panel-content>
          <Sources />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import SuperPos from "../markdowns/superposition.md";
import QuantEntag from "../markdowns/Quantum Entanglement.md";
import QuantState from "../markdowns/Quantum State.md";
import QuantSuper from "../markdowns/Quantum Superposition.md";
import SchrCat from "../markdowns/Schrödinger's cat.md";
import SuperPrin from "../markdowns/Superposition Principle.md";
import Quiz from "../components/Quiz.vue";
import anime from 'animejs/lib/anime.es.js';

export default Vue.extend({
  name: "Quantum Physics",

  data: () => ({
    lightning_pos: 0,
    temp_pos: 0,
    attraction_pos: 0,
    attraction2_pos: 0,
    flux_animation: anime(),
    questions: [
      {
        title: "Superconductivity",
        question: "What does superconductivity mean?",
        choices: [
          "It is super good at conducting",
          "It is super bad at conducting",
          "It conducts superbly",
          "Conductivity that surpasses the norm and enters 𝕴𝖓𝖋𝖎𝖓𝖎𝖙𝖞",
        ],
        reason:
          "Superconductors in theory, has zero resistance, and infinite conductivity.",
        correct: 3,
        answer: -1,
        buffer: -1,
      },
      {
        title: "Electron",
        question:
          "Which of the 2 families of particles are electrons in? (grouped by spin)",
        choices: ["Bosons", "Fermions", "Photons", "Electrons"],
        reason:
          "Integer spin particles are Bosons, and half integer spin particles are Fermions. Electron is half spin.",
        correct: 1,
        answer: -1,
        buffer: -1,
      },
      {
        title: "Kerbal",
        question: "Where can superconductor operate?",
        choices: [
          "Operating Oven",
          "Surface of Sun",
          "Middle of Outer Space",
          "Family Fridge",
        ],
        reason:
          "Superconductors require extremely low temperatures to operate, even the highest possible temperature is 138K (1-atm).",
        correct: 2,
        answer: -1,
        buffer: -1,
      },
      {
        title: "Heat",
        question: "What does heat do to conductivity and why?",
        choices: [
          "It decreases conductivity because heat will move electrons backwards",
          "It increases conductivity since electrons can now move faster",
          "It decreases conductivity because heat will cause more lattice vibrations",
          "It increases conductivity since protons can now push electrons forward",
        ],
        reason:
          "As temperature increase, lattice vibrates more and collision of atoms and electrons become more frequent, causing electrons to lose more energy, and hence a higher resistance.",
        correct: 2,
        answer: -1,
        buffer: -1,
      },
      {
        title: "Einstein",
        question: "Which of the following can share the same quantum state?",
        choices: [
          "Muon&Muon",
          "Neuron&Neuron",
          "Neutrino&Neutrino",
          "Electrons&Electrons",
        ],
        reason:
          'Note that electron"s" can form cooper pairs, and cooper pairs are composite bosons that can, share quantum state.',
        correct: 3,
        answer: -1,
        buffer: -1,
      },
      {
        title: "Why",
        question:
          "Why can electrons flow through a superconductor without losing energy to collisions?",
        choices: [
          "Electrons have very little to none kinetic energy at such low temperatures, this cause the Higgs Boson effect that collapses electron's wave-function into a single point, enabling it to flow through space without colliding with anything.",
          "After cooled to near absolute zero, electrons have now moved into the 4th dimensional and is able to phase through matter",
          "Since the lattice vibrates a lot less, lattices becomes very tidy and clean. Since most of the space in an atom is empty, electrons can just fly right through without hitting anything.",
          "Superconductors creates a gap in spacetime where electrons can quantum tunnel from one side to another due to the Uncertainty principle, this can only happen at low temperatures since wave functions are smaller",
          "Electrons under super low temperatures can form Bose-Einstein-Condensate, the 5th state of matter.",
          "Electrons paired can have energy lower than normal ground energy, while breaking the space-time continuity",
          "It is still unknown to humanity how superconductors come to be",
          "We live in a simulation and cooling materials down to such low temperatures activates a bug in the resistance calculation",
        ],
        reason:
          "Electrons at such low temperatures form cooper pairs that are composite bosons, they can collapse into the same lowest energy ground state (BECs). Which is lower than fermi energy, enabling superconductivity.",
        correct: 4,
        answer: -1,
        buffer: -1,
      },
      {
        title: "WHY?",
        question: "Why are superconductors important?",
        choices: [
          "They can conduct a lot of electricity",
          "They can transport large amounts of electrons in a very short period of time",
          "They can create magnetic fields that lasts for eternity",
          "They have the ability of collapse into a single point, a singularity, and hence the ultimate weapon of humanity.",
        ],
        reason:
          "Superconducting wires can form electromagnets that does not need a power source. Some has tried and the magnet used is still levitating after a decade.",
        correct: 2,
        answer: -1,
        buffer: -1,
      },
      {
        title: "Feedback",
        question: "Is the website well made?",
        choices: [
          "Ye-yes",
          "No",
          "IT IS THE BEST WEBSITE EVER",
          "Well according to the World Organization of Good Website Designs, this website only scores 1/10",
        ],
        reason: "I am the one in charge here",
        correct: 2,
        answer: -1,
        buffer: -1,
      },
    ],
  }),

  components: {
    SuperPrin,
    QuantState,
    QuantSuper,
    QuantEntag,
    SchrCat,
  },
});
</script>
<style>
img {
  max-width: 100%;
}
</style>
