<template>
  <v-container fluid class="pa-0">
    <v-flex xs12 sm12>
      <v-parallax
          height="200" src="https://www.sciencealert.com/images/2019-06/processed/superconductivity_topic_1024.jpg">
        <v-layout column align-center justify-center>
          <h1 id="main-title" class="rounded">Super Conductors</h1>
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
              <v-col cols="4" class="pa-0">
                <Lightning :pos="lightning_pos"/>
              </v-col>
              <v-col cols="8">
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
      <section class="justify-center px-5 mt-2">
        <h3>Pretty Cool</h3>
        <p>That means if you have a looping coil of superconducting wires, and run a current through it, it will
          not lose energy even if we leave it there for years. This has been done and there were no measurable lose in
          intensity of the current.</p>
        <v-btn class="my-2" outlined to="/magnet">This is however not the ideal zero resistance material of classical
          physics.
        </v-btn>
        <p>But how is it possible for something to have zero resistance and why does the resistance suddenly
          drop to zero at a certain temperature?</p>
      </section>
      <section>
        <v-hover v-slot="{ hover }" id="attraction">
          <v-card style="transition: box-shadow 0.5s;"
                  class="pa-4"
                  :elevation="hover?10:0">
            <v-row>
              <v-col cols="4" class="pa-0">
                <Attraction :pos="attraction_pos"/>
              </v-col>
              <v-col cols="8">
                <scexp1/>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
      </section>
      <scexp2/>
      <v-img :src="require('../assets/halfspin.dark.svg')" width="100%"/>
      <section>
        <v-hover v-slot="{ hover }" id="attraction2">
          <v-card style="transition: box-shadow 0.5s;"
                  class="pa-4"
                  :elevation="hover?10:0">
            <v-row>
              <v-col cols="4" class="pa-0">
                <Attraction :pos="attraction2_pos" n="3" strength="50"/>
              </v-col>
              <v-col cols="8">
                <scexp3/>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
      </section>
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
import scexp2 from '../markdowns/sc_exp_2.md';
import scexp3 from '../markdowns/sc_exp_3.md';

import ScrollMagic, {SceneProgressEvent} from 'scrollmagic';
import {controller} from '../App.vue'

export default Vue.extend({
  name: 'About',
  data: () => ({
    lightning_pos: 0,
    temp_pos: 0,
    attraction_pos: 0,
    attraction2_pos: 0
  }),
  components: {
    scbg,
    scintro,
    scexp1, scexp2, scexp3,
    TempGraph,
    Lightning,
    MetallicBonding,
    Attraction
  },
  mounted() {
    controller
        .addScene(new ScrollMagic.Scene({
          triggerElement: '#lightning',
          triggerHook: 'onLeave',
          offset: -94,
          duration: 1000
        })
            .setPin('#lightning')
            .on("progress", (event: SceneProgressEvent<'progress'>) => this.lightning_pos = event.progress))
        .addScene(new ScrollMagic.Scene({
          triggerElement: '#temp_graph',
          triggerHook: 'onLeave',
          offset: -94,
          duration: 1000
        })
            .setPin('#temp_graph')
            .on("progress", (event: SceneProgressEvent<'progress'>) => this.temp_pos = event.progress))
        .addScene(new ScrollMagic.Scene({
          triggerElement: '#attraction',
          triggerHook: 'onLeave',
          offset: -94,
          duration: 1000
        })
            .setPin('#attraction')
            .on("progress", (event: SceneProgressEvent<'progress'>) => this.attraction_pos = event.progress))
        .addScene(new ScrollMagic.Scene({
          triggerElement: '#attraction2',
          triggerHook: 'onLeave',
          offset: -94,
          duration: 1000
        })
            .setPin('#attraction2')
            .on("progress", (event: SceneProgressEvent<'progress'>) => this.attraction2_pos = event.progress))
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