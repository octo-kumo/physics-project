<template>
  <v-container fluid class="pa-0">
    <v-flex xs12 sm12>
      <v-parallax
          height="300" src="https://www.sciencealert.com/images/2019-06/processed/superconductivity_topic_1024.jpg">
        <v-layout column align-center justify-center>
          <h1>Super Conductors</h1>
        </v-layout>
      </v-parallax>
    </v-flex>
    <v-container>
      <kinesis-container event="move">
        <kinesis-element type="depth" strength="5">
          <v-hover v-slot="{ hover }">
            <v-card
                style="transition: box-shadow 0.5s;"
                rounded
                class="mb-10"
                :elevation="hover?10:0">
              <v-row>
                <v-col cols="3" class="pa-0">
                  <kinesis-container event="move">
                    <kinesis-element type="depth" strength="20" axis="x">
                      <v-img
                          max-height="100%"
                          src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Kamerlingh_Onnes_signed.jpg"
                      ></v-img>
                    </kinesis-element>
                  </kinesis-container>
                </v-col>
                <v-col cols="9">
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
      <h5>Insulator</h5>
      <p>On the other hand, if we had an insulator, its electrons are strongly bound to the nucleus, hence electrons can
        not flow through them easily. This will not stop super high potential differences from stripping the electrons
        off.</p>
      <p>You would not call atmosphere air a good conductor, however during a lightning strike, it does conduct
        electricity.</p>
      <Lightning/>
      <h5>Relation with Temperature</h5>
      <p>Even in good conductors, the atoms inside still vibrate around and collides with the flowing electrons, this
        cause the electrons to lose energy, resulting in resistance.</p>
      <p>When the material is hotter, atoms vibrate more and usually has a greater resistance.<br>And when the material
        is cooler, the resistance is lower.</p>
      <h5>Exception</h5>
      <p>However for some materials, when it is cooled under a certain temperature called the critical temperature, its
        resistance drops to zero and currents can flow through it without losing energy.<br><i>See Graph</i>
      </p>
      <p>That means if you have a looping coil of superconducting wires, and run a current through it, it will not lose
        energy even if we leave it there for years.</p>
      <p>This has been done and there were no measurable lose in intensity of the current.</p>
      <p>But how is it possible for something to have zero resistance and why does the resistance suddenly drop to zero
        at a certain temperature?</p>
      <TempGraph id="tempgraph"></TempGraph>
      <scexp1/>
      <Attraction/>
    </v-container>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue';
import Lightning from "../animations/lightning.vue";
import MetallicBonding from "../animations/metallic_lattice.vue";
import TempGraph from "../animations/resis_graph.vue";
import Attraction from "../animations/attraction.vue";

import scbg from '../markdowns/sc_bg.md';
import scintro from '../markdowns/sc_intro.md';
import scexp1 from '../markdowns/sc_exp_1.md';

export default Vue.extend({
  name: 'About',
  data: () => ({}),
  components: {
    scbg,
    scintro,
    scexp1,
    TempGraph,
    Lightning,
    MetallicBonding,
    Attraction
  },
  methods: {}
});
</script>
<style>
.v-application.theme--dark #tempgraph {
  filter: invert(35%) sepia(36%) saturate(100%) hue-rotate(2deg) brightness(150%) contrast(88%);
}
</style>