<template>
  <v-container fluid class="pa-0">
    <v-flex xs12 sm12>
      <v-parallax
          height="500" src="https://www.sciencealert.com/images/2019-06/processed/superconductivity_topic_1024.jpg">
        <v-layout column align-center justify-center>
          <h1>Super Conductors</h1>
        </v-layout>
      </v-parallax>
    </v-flex>
    <v-container>
      <kinesis-container event="move">
        <kinesis-element type="depth" strength="5">
          <v-card
              class="mb-10"
              @mouseover="backgroundHover = true"
              @mouseleave="backgroundHover = false"
              :elevation="backgroundHover?10:0">
            <v-row>
              <v-col cols="3" class="pa-0">
                <v-img
                    max-height="100%"
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Kamerlingh_Onnes_signed.jpg"
                ></v-img>
              </v-col>
              <v-col cols="9">
                <v-card-title>Background</v-card-title>
                <v-card-text>
                  <p>The superconductivity phenomenon was discovered in 1911 by Dutch physicist <a
                      href='https://en.wikipedia.org/wiki/Heike_Kamerlingh_Onnes'>Heike Kamerlingh Onnes</a>, it can
                    only be explained with quantum physics.</p>
                  <p>It is achieved by cooling materials down to very low temperatures, usually with liquid Helium
                    (below 4.2K or -268.95°C).</p>
                  <p>It is characterized by the <a href="https://en.wikipedia.org/wiki/Meissner_effect">Meissner
                    effect</a>, where all magnetic field lines are not allowed to pass through the object, they instead
                    curve around the object.</p>
                  <p>This differentiates superconductors from the idealised zero resistance, or perfect conductivity of
                    classical physics.</p>
                  <p>In 1986, some cuprate-perovskite ceramic materials was discovered to have a critical temperature
                    above 90 K (−183 °C). Such a high transition temperature is theoretically impossible for a
                    conventional superconductor, leading the materials to be termed high-temperature
                    superconductors.</p>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </kinesis-element>
      </kinesis-container>
      <h4 id='introduction'>Introduction</h4>
      <p>Let&#39;s say we have an battery-light setup, the battery creates a potential difference, which will induce a
        flow of electrons.</p>
      <p>The battery creates a potential difference across the wire.</p>
      <v-img src="@/assets/circuit-bulb.png" max-width="700px"></v-img>
      <p>The wire is a metal conductor, its metallic lattice contains free electrons that are loosely bound and can move
        easily when there is a potential difference.</p>
      <p>They will now move between the atoms in the direction of the potential difference, creating a <b>current</b>.
      </p>
      <MetallicBonding/>
      <p>On the other hand, if we had an insulator, its electrons are strongly bound to the nucleus, hence electrons can
        not flow through them easily. This will not stop super high potential differences from stripping the electrons
        off, such as in a lightning.</p>
      <Lightning/>
      <p>Even in good conductors, the atoms inside still vibrate around and collides with the flowing electrons, this
        cause the electrons to lose energy, resulting in resistance.</p>
      <p>When the material is hotter, atoms vibrate more and usually has a greater resistance. And when the material is
        cooler, the resistance is cooler.</p>
      <p>However for some materials, when it is cooled under a certain temperature called the critical temperature, it
        has
        the effect of superconductivity. Its resistance drops to zero and currents can flow through it without losing
        energy.</p>
      <TempGraph id="tempgraph"></TempGraph>
      <p>That means if you have a looping coil of superconducting wires, and run a current through it, it will not lose
        energy. Some had done this and left it running for years without measurable lose in intensity of the
        current.</p>
      <h4 id='explanation'>Explanation</h4>
      <p>If we look at the metallic lattice of our superconducting material, it has been cooled by liquid helium and
        hence
        the vibrations are negligible. </p>
      <p>Free electrons flow in the direction of the potential difference between atoms of the lattice. These atoms are
        positively charged since they lost their electrons.</p>
      <Attraction/>
      <p>These atoms will be attracted to the electrons and move slightly towards the electron. That makes the region
        slightly more positively charged. This will attract electrons behind it</p>
      <p>&nbsp;</p>
    </v-container>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue';
import Lightning from "../assets/lightning.vue";
import MetallicBonding from "../assets/Metallic_bonding.vue";
import TempGraph from "../assets/resis-graph.vue";
import Attraction from "../assets/attraction.vue";

export default Vue.extend({
  name: 'About',
  data: () => ({
    backgroundHover: false,
  }),
  components: {
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