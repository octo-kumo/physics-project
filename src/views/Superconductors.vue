<template>
  <v-container fluid class="pa-0">
    <v-flex xs12 sm12>
      <v-parallax
          height="200" src="https://www.sciencealert.com/images/2019-06/processed/superconductivity_topic_1024.jpg">
        <v-layout column align-center justify-center>
          <h1 id="main-title" class="rounded">Superconductors</h1>
        </v-layout>
      </v-parallax>
    </v-flex>
    <v-container>
      <kinesis-container event="move" id="background-info">
        <kinesis-element type="depth" :strength="5">
          <v-hover v-slot="{ hover }">
            <v-card
                style="transition: box-shadow 0.5s;"
                rounded
                class="mb-10"
                :elevation="hover?10:0">
              <v-row>
                <v-col cols="12" sm="6" md="4" lg="3" class="pa-0">
                  <kinesis-container event="move">
                    <kinesis-element type="depth" :strength="20" axis="x">
                      <v-img
                          max-height="100%"
                          src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Kamerlingh_Onnes_signed.jpg"
                      ></v-img>
                    </kinesis-element>
                  </kinesis-container>
                </v-col>
                <v-col cols="12" sm="6" md="8" lg="9">
                  <v-card-title>Background</v-card-title>
                  <v-card-text>
                    <scbg/>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </kinesis-element>
      </kinesis-container>
      <scintro/>
      <MetallicBonding/>
      <v-divider class="my-8"></v-divider>
      <section>
        <v-hover v-slot="{ hover }" id="lightning">
          <v-card style="transition: box-shadow 0.5s;"
                  class="pa-4"
                  :elevation="hover?10:0">
            <v-row>
              <v-col cols="12" sm="6" md="4" class="pa-0">
                <Lightning :pos="lightning_pos"/>
              </v-col>
              <v-col cols="12" sm="6" md="8">
                <v-card-title>Insulator</v-card-title>
                <v-card-text>On the other hand, if we had an insulator, its electrons are strongly bound to the nucleus,
                  hence electrons can not be displaced easily. This means that electrons can not enter or leave the
                  lattice easily, making it hard for current to flow through. We can call them <b>Resistors</b> or
                  material with high resistance.
                </v-card-text>
                <v-card-text>
                  However, it is not impossible for current to flow. If the potential difference is high enough,
                  electrons can gain enough energy to break free of the atoms pull.
                </v-card-text>
                <v-card-text>Atmosphere air is not a good conductor, but during a lightning storm, the enormous amount
                  of energy created by massive cloud movement is able to create a potential difference that enable
                  electrons to flow through air.
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
      </section>
      <section>
        <v-hover v-slot="{ hover }" id="temp_graph">
          <v-card style="transition: box-shadow 0.5s;"
                  class="pa-4"
                  :elevation="hover?10:0">
            <v-row>
              <v-col cols="12" md="6">
                <v-card-title>Relation with Temperature</v-card-title>
                <v-card-text><p>Even in good conductors, the atoms inside still vibrate around and collides with the
                  flowing electrons, this cause the electrons to lose energy, resulting in resistance.</p>
                  <p>When the material is hotter, atoms vibrate more collides more often with electrons, hence a greater
                    resistance.And when the material is cooler, the resistance is lower.</p>
                  <p>Similarly, as the electrons collide with the atoms, the material will gain energy in the form of
                    heat.</p>
                  <div :class="{animateShow:true,shown:temp_pos>0.5}">
                    <h3>Exception</h3>
                    <p>However for some materials, when it is cooled under a certain temperature called the
                      <strong>critical temperature</strong>, its resistance drops to zero and currents can flow through
                      it without
                      losing energy.</p>
                  </div>
                </v-card-text>
              </v-col>
              <v-col cols="12" md="6" class="pa-0">
                <TempGraph :pos="temp_pos"/>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
      </section>
      <section class="justify-center px-5 my-5">
        <h3>Pretty Cool</h3>
        <p>That means if you have a looping coil of superconducting wires, and run a current through it, it will
          not lose energy even if we leave it there for years. This has been done and there were no measurable lose in
          intensity of the current.</p>
        <v-btn class="my-2" outlined to="magnet">This is however not the ideal zero resistance material of classical
          physics.
        </v-btn>
        <p>But how is it possible for something to have zero resistance and why does the resistance suddenly
          drop to zero at a certain temperature?</p>
      </section>
      <section class="my-5" id="attractionAnchor">
        <v-hover v-slot="{ hover }" id="attraction">
          <v-card style="transition: box-shadow 0.5s;"
                  class="pa-4"
                  :elevation="hover?10:0">
            <v-row>
              <v-col cols="12" sm="6" md="4" class="pa-0">
                <Attraction :pos="attraction_pos"/>
              </v-col>
              <v-col cols="12" sm="6" md="8">
                <scexp1/>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
      </section>
      <scexp2/>
      <v-row justify="center">
        <v-col cols="12" md="4">
          <HalfSpin/>
        </v-col>
        <v-col cols="12" md="8">
          <scexpHalfSpin/>
        </v-col>
      </v-row>
      <section class="my-5">
        <v-hover v-slot="{ hover }" id="attraction2">
          <v-card style="transition: box-shadow 0.5s;"
                  class="pa-4"
                  :elevation="hover?10:0">
            <v-row>
              <v-col cols="12" sm="6" md="4" class="pa-0">
                <Attraction :pos="attraction2_pos" n="5" strength="20"/>
              </v-col>
              <v-col cols="12" sm="6" md="8">
                <scexp3/>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
      </section>
      <section class="my-5">
        <v-hover v-slot="{ hover }">
          <v-card style="transition: box-shadow 0.5s;"
                  class="pa-4"
                  :elevation="hover?10:0">
            <v-row>
              <v-col cols="12" sm="6" md="8">
                <scexp4/>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <EnergyGraph/>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
      </section>
      <section class="my-5 pa-5">
        <v-row id="flex-animation">
          <v-col cols="12" sm="6">
            <MagnetExp1/>
          </v-col>
          <v-col cols="12" sm="6">
            <Flux id="flex-svg"/>
          </v-col>
        </v-row>
      </section>
      <v-divider class="my-5"/>
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
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue';
import Lightning from "../animations/lightning.vue";
import MetallicBonding from "../animations/metallic_lattice.vue";
import TempGraph from "../animations/resis_graph.vue";
import Attraction from "../animations/attraction.vue";
import Flux from '../animations/magnetic_flux.svg';
import EnergyGraph from '../assets/energy-graph.svg';
import HalfSpin from '../assets/halfspin.dark.svg';

import scbg from '../markdowns/sc_bg.md';
import scintro from '../markdowns/sc_intro.md';
import scexp1 from '../markdowns/sc_exp_1.md';
import scexp2 from '../markdowns/sc_exp_2.md';
import scexp3 from '../markdowns/sc_exp_3.md';
import scexp4 from '../markdowns/sc_exp_4.md';
import scexpHalfSpin from '../markdowns/sc_exp_spin.md';
import MagnetExp1 from '../markdowns/sc_magnet_1.md';
import About from '../markdowns/sc_about.md';
import Sources from '../markdowns/sc_sources.md';

import Quiz from '../components/Quiz.vue';
import ScrollMagic, {SceneProgressEvent} from 'scrollmagic';
import {controller} from '../App.vue'
import anime from 'animejs/lib/anime.es.js';

export default Vue.extend({
  name: 'Superconductor',
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
        choices: ['It is super good at conducting', 'It is super bad at conducting', 'It conducts superbly', 'Conductivity that surpasses the norm and enters 𝕴𝖓𝖋𝖎𝖓𝖎𝖙𝖞'],
        reason: 'Superconductors in theory, has zero resistance, and infinite conductivity.',
        correct: 3, answer: -1, buffer: -1
      },
      {
        title: "Electron",
        question: "Which of the 2 families of particles are electrons in? (grouped by spin)",
        choices: ['Bosons', 'Fermions', 'Photons', 'Electrons'],
        reason: 'Integer spin particles are Bosons, and half integer spin particles are Fermions. Electron is half spin.',
        correct: 1, answer: -1, buffer: -1
      }, {
        title: "Kerbal",
        question: "Where can superconductor operate?",
        choices: ['Operating Oven', 'Surface of Sun', 'Middle of Outer Space', 'Family Fridge'],
        reason: 'Superconductors require extremely low temperatures to operate, even the highest possible temperature is 138K (1-atm).',
        correct: 2, answer: -1, buffer: -1
      }, {
        title: "Heat",
        question: "What does heat do to conductivity and why?",
        choices: ['It decreases conductivity because heat will move electrons backwards',
          'It increases conductivity since electrons can now move faster',
          'It decreases conductivity because heat will cause more lattice vibrations',
          'It increases conductivity since protons can now push electrons forward'],
        reason: 'As temperature increase, lattice vibrates more and collision of atoms and electrons become more frequent, causing electrons to lose more energy, and hence a higher resistance.',
        correct: 2, answer: -1, buffer: -1
      }, {
        title: "Einstein",
        question: "Which of the following can share the same quantum state?",
        choices: ['Muon&Muon', 'Neuron&Neuron', 'Neutrino&Neutrino', 'Electrons&Electrons'],
        reason: 'Note that electron"s" can form cooper pairs, and cooper pairs are composite bosons that can, share quantum state.',
        correct: 3, answer: -1, buffer: -1
      }, {
        title: "Why",
        question: "Why can electrons flow through a superconductor without losing energy to collisions?",
        choices: ['Electrons have very little to none kinetic energy at such low temperatures, this cause the Higgs Boson effect that collapses electron\'s wave-function into a single point, enabling it to flow through space without colliding with anything.',
          'After cooled to near absolute zero, electrons have now moved into the 4th dimensional and is able to phase through matter',
          'Since the lattice vibrates a lot less, lattices becomes very tidy and clean. Since most of the space in an atom is empty, electrons can just fly right through without hitting anything.',
          'Superconductors creates a gap in spacetime where electrons can quantum tunnel from one side to another due to the Uncertainty principle, this can only happen at low temperatures since wave functions are smaller',
          'Electrons under super low temperatures can form Bose-Einstein-Condensate, the 5th state of matter.',
          'Electrons paired can have energy lower than normal ground energy, while breaking the space-time continuity',
          'It is still unknown to humanity how superconductors come to be',
          'We live in a simulation and cooling materials down to such low temperatures activates a bug in the resistance calculation'
        ],
        reason: 'Electrons at such low temperatures form cooper pairs that are composite bosons, they can collapse into the same lowest energy ground state (BECs). Which is lower than fermi energy, enabling superconductivity.',
        correct: 4, answer: -1, buffer: -1
      }, {
        title: "WHY?",
        question: "Why are superconductors important?",
        choices: ['They can conduct a lot of electricity',
          'They can transport large amounts of electrons in a very short period of time',
          'They can create magnetic fields that lasts for eternity',
          'They have the ability of collapse into a single point, a singularity, and hence the ultimate weapon of humanity.'],
        reason: 'Superconducting wires can form electromagnets that does not need a power source. Some has tried and the magnet used is still levitating after a decade.',
        correct: 2, answer: -1, buffer: -1
      }, {
        title: "Feedback",
        question: "Is the website well made?",
        choices: ['Ye-yes', 'No', 'IT IS THE BEST WEBSITE EVER', 'Well according to the World Organization of Good Website Designs, this website only scores 1/10'],
        reason: 'I am the one in charge here',
        correct: 2, answer: -1, buffer: -1
      }
    ]
  }),
  components: {
    scbg,
    scintro,
    scexp1, scexp2, scexp3, scexp4, Quiz,
    scexpHalfSpin,
    EnergyGraph, Flux,
    HalfSpin,
    TempGraph,
    Lightning,
    MetallicBonding,
    Attraction,
    MagnetExp1,
    About,
    Sources
  },
  mounted() {
    this.flux_animation = anime({
      targets: '#flex-svg path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1000,
      delay: (el: Element, i: number) => (i % 54) * 100,
      direction: 'alternate',
      autoplay: false
    });
    controller
        .addScene(new ScrollMagic.Scene({
          triggerElement: '#lightning',
          triggerHook: 'onLeave',
          offset: -94,
          duration: 1000
        }).setPin('#lightning').on("progress", (event: SceneProgressEvent<'progress'>) => this.lightning_pos = event.progress))
        .addScene(new ScrollMagic.Scene({
          triggerElement: '#temp_graph',
          triggerHook: 'onLeave',
          offset: -94,
          duration: 1000
        }).setPin('#temp_graph').on("progress", (event: SceneProgressEvent<'progress'>) => this.temp_pos = event.progress))
        .addScene(new ScrollMagic.Scene({
          triggerElement: '#attraction',
          triggerHook: 'onLeave',
          offset: -94,
          duration: 1000
        }).setPin('#attraction').on("progress", (event: SceneProgressEvent<'progress'>) => this.attraction_pos = event.progress))
        .addScene(new ScrollMagic.Scene({
          triggerElement: '#attraction2',
          triggerHook: 'onLeave',
          offset: -94,
          duration: 1000
        }).setPin('#attraction2').on("progress", (event: SceneProgressEvent<'progress'>) => this.attraction2_pos = event.progress))
        .addScene(new ScrollMagic.Scene({
          triggerElement: '#flex-animation',
          triggerHook: 'onLeave',
          offset: -94,
          duration: 1000
        }).setPin('#flex-animation').on("progress", (event: SceneProgressEvent<'progress'>) => this.flux_animation.seek(event.progress * this.flux_animation.duration)))
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

.animateShow {
  opacity: 0;
  transition: opacity 0.25s;
}

.animateShow.shown {
  opacity: 1;
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

blockquote p {
  display: inline;
}
</style>