<template>
  <v-container fluid class="pa-0">
    <kinesis-container event="scroll" style="overflow: hidden; height: 20em;" duration="0">
      <kinesis-element
          originY="60"
          max-y="0"
          axis="y"
          :strength="200"
          type="translate">
        <v-img src="https://www.sciencealert.com/images/2019-06/processed/superconductivity_topic_1024.jpg"/>
      </kinesis-element>
    </kinesis-container>
    <v-container>
      <h4 id='background'>Background</h4>
      <p>The superconductivity phenomenon was discovered in 1911 by Dutch physicist <a
          href='https://en.wikipedia.org/wiki/Heike_Kamerlingh_Onnes'>Heike Kamerlingh Onnes</a>, it is achieved by
        cooling materials down to very low temperatures, usually with liquid helium (4.2K).</p>
      <h4 id='introduction'>Introduction</h4>
      <p>Let&#39;s say we have an battery-light setup, the battery creates a potential difference, which will induce a
        flow of electrons.</p>
      <kinesis-container event="scroll" style="overflow: hidden" duration="0">
        <kinesis-element
            originY="60"
            axis="y"
            :strength="50"
            type="translate">
          <v-img src="https://firstresponder.domsafety.com/wp-content/uploads/2018/02/circuit_anim_v9.gif" width="50%"
                 min-width="200px" max-width="100%"/>
        </kinesis-element>
      </kinesis-container>
      <p>The wire is a metal conductor, its metallic lattice contains free electrons that are loosely bound and move
        easily when there is a potential difference.</p>
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
      <p>[graph of resistance temperature]</p>
      <p>That means if you have a looping coil of superconducting wires, and run a current through it, it will not lose
        energy. Some had done this and left it running for years without measurable lose in intensity of the
        current.</p>
      <h4 id='explanation'>Explanation</h4>
      <p>If we look at the metallic lattice of our superconducting material, it has been cooled by liquid helium and
        hence
        the vibrations are negligible. </p>
      <p>Free electrons flow in the direction of the potential difference between atoms of the lattice. These atoms are
        positively charged since they lost their electrons.</p>
      <p>[animation of such]</p>
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

export default Vue.extend({
  name: 'About',
  data: () => ({
    //
  }),
  components: {
    Lightning,
    MetallicBonding
  },
  methods: {}
});
</script>