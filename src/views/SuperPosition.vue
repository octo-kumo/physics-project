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
      <v-hover v-slot="{ hover }">
        <v-card
            style="transition: box-shadow 0.5s"
            rounded
            class="mb-10"
            :elevation="hover ? 10 : 0"
        >
          <v-card-text>
            <SuperPrin/>
          </v-card-text>
          <v-layout>
            <WaveComposition/>
          </v-layout>
        </v-card>
      </v-hover>
      <v-hover v-slot="{ hover }">
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
                <QuantState/>
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
      </v-hover>
      <v-card
          style="transition: box-shadow 0.5s;"
          rounded
          class="mb-10">
        <v-row>
          <v-col cols="2" sm="10" md="10" lg="4" class="pa-0">
            <v-img
                max-height="100%"
                src="@/assets/superpos_particle.gif"
            ></v-img>
            <v-img
                max-height="100%"
                src="https://lh5.googleusercontent.com/d3hfjkLFmA5-Kx07UoC3QZ0w3hvbb5JfvTOd6hLo3FsE5i4tW7lMG_lIsYq1-FIi86QK9oKO56rEfI5fuMTUQtzLy_AJXCOGIN2Jta2aFFJWmKSmFprCK87ngJr8BWTUDJdvL5-4=s0"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="6" md="8" lg="8">
            <v-card-title>Quantum Superposition</v-card-title>
            <v-card-text>
              <QuantSuper/>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
      <v-card
          style="transition: box-shadow 0.5s;"
          rounded
          class="mb-10">
        <v-row align:center>
          <v-col cols="12" sm="6" md="7" lg="8">
            <v-card-title>Schrödinger's cat</v-card-title>
            <v-card-text>
              <SchrCat/>
            </v-card-text>
          </v-col>
          <v-col cols="12" sm="2" md="10" lg="4" class="pa-0">
            <kinesis-container event="move">
              <kinesis-element type="depth" :strength="30" axis="x">
                <v-img
                    max-height="50%"
                    src="https://upload.wikimedia.org/wikipedia/commons/9/91/Schrodingers_cat.svg"
                ></v-img>
              </kinesis-element>
            </kinesis-container>
          </v-col>
        </v-row>
      </v-card>
      <v-card
          style="transition: box-shadow 0.5s;"
          rounded
          class="mb-10">
        <v-card-title>Quantum entanglement</v-card-title>
        <v-col>
          <v-card-text>
            <QuantEntag1/>
          </v-card-text>
          <v-layout column align-center>
            <v-img
                width="800"
                src="@/assets/entangle_state.png"
            ></v-img>
          </v-layout>
          <v-row>
            <v-card-text>
              <QuantEntag2/>
            </v-card-text>
            <v-layout column align-center>
              <v-card height="350px" width="900px" style="overflow-y:auto;" align-center>
                <v-col>
                  <v-img
                      src="https://images.deepai.org/converted-papers/1810.08421/Fig-09.png"
                  ></v-img>
                </v-col>
              </v-card>
            </v-layout>
          </v-row>
        </v-col>
      </v-card>
    </v-container>

    <h1>Quiz</h1>
    <Quiz v-model="questions"/>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          About
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <About/>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          Sources
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <Sources/>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import WaveComposition from '../animations/wave_composite.vue';
import QuantEntag1 from "../markdowns/Quantum Entanglement1.md";
import QuantEntag2 from "../markdowns/Quantum Entanglement2.md";
import QuantState from "../markdowns/Quantum State.md";
import QuantSuper from "../markdowns/Quantum Superposition.md";
import SchrCat from "../markdowns/Schrödinger's cat.md";
import SuperPrin from "../markdowns/Superposition Principle.md";
import Quiz from '../components/Quiz.vue';
import About from "../markdowns/phys_about.md";
import Sources from "../markdowns/phys_sources.md";

export default Vue.extend({
  name: "Quantum Physics",
  data: () => ({
    lightning_pos: 0,
    temp_pos: 0,
    attraction_pos: 0,
    attraction2_pos: 0,
    questions: [
      {
        title: "Probability",
        question: "Consider the example that i have mentioned earlier where we have an electron and its quantum state has a coefficient C1 of being spin up and coefficient C2 of being spin down. If C1 = 3/5 & C2 = 4/5, what is the probability of measuring the electron spin up? ",
        choices: ['3/5','9/25','4/25','16/25'],
        reason: 'As i stated earlier, the probability of measuring the electron spin up is the |C1|^2 so (3/5)^2 gives you 9/25. So there is 9/25 probability of measuring the electron spin up.',
        correct: 1, answer: -1, buffer: -1
      },
      {
        title: "Entanglement",
        question: "Lets say we generate a entangled quantum system of two electrons has total zero spin. If we measured the first electron to be spin up then what will observe when the second electron is measured:",
        choices: ['spin up', 'spin down', 'both spin up and down', 'cannot be found'],
        reason: 'Since the two electrons are entangled and the first qubit is spin up then by quantum entanglement, the second qubit must be spin down',
        correct: 1, answer: -1, buffer: -1
      },
      {
        title: "Einstein",
        question: "Why did einstein call quantum entanglement spooky action of distance?",
        choices: ['It becomes mysterious at large distances', 'Two quantum entangled electrons can interact faster than the speed of light', 'It will disappear when measured from a distance', 'I do not know'],
        reason: "Quantum entanglement gives the idea that tiny particles are linked to each other  even if they're separated by long distances. This cannot happen as it faster than the speed of light which is why einstein called it spooky action at a distance",
        correct: 1, answer: -1, buffer: -1
      },
    ]
  }),

  components: {
    WaveComposition,
    SuperPrin,
    QuantState,
    QuantSuper,
    QuantEntag1,
    QuantEntag2,
    SchrCat,
    Quiz,
    About,
    Sources,
  }

});
</script>
<style>
.v-application.theme--dark #tempgraph {
  filter: invert(35%) sepia(36%) saturate(100%) hue-rotate(2deg) brightness(150%) contrast(88%);
}

#main-title {
  padding: 1em 2em;
  backdrop-filter: blur(10px) brightness(60%);
}

img {
  max-width: 100%;
}

blockquote {
  backdrop-filter: invert(10%);
  border-left: 10px solid #aaaa;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  quotes: "\201C" "\201D" "\2018" "\2019";
}

blockquote:before {
  color: #ccc;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}

.scrolly {
  margin: 0px;
  background-color: teal;
  overflow-y: scroll
}

.scrollx {
  overflow-x: scroll
}

blockquote p {
  display: inline;
}
</style>
