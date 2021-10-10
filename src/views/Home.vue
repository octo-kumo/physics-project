<template>
  <v-container fluid class="pa-0">
    <div id="background-1">
      <transition name="fade">
        <SystemOne id="background-1-img" v-if="!animation_done"></SystemOne>
        <v-img id="background-2-img" src="@/assets/system_one.jpg" v-if="animation_done"></v-img>
      </transition>
    </div>
    <v-bottom-navigation style="position:sticky;top:0;bottom:unset;z-index:1000;">
      <v-btn v-for="route in routes"
             :key="route.path"
             :to="route.path">
        <span>{{ route.name }}</span>
        <v-icon>{{ route.meta.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-container class="pt-5">
      <HomeIntro/>
      <v-divider class="my-10"/>
      <h2 class="text-center">Pages</h2>
      <v-row class="pa-10">
        <v-col cols="12" sm="6" md="4" v-for="page in pages" :key="page.sid" style="width:50%">
          <v-card>
            <v-img :aspect-ratio="1" :src="page.src"></v-img>

            <v-card-title>{{ page.name }}</v-card-title>
            <v-card-text>{{ page.summary }}</v-card-text>
            <v-card-actions>
              <v-btn
                  :to="page.path"
                  block
                  color="primary"
                  elevation="2">{{ page.hook }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <h2 class="text-center">Credits</h2>
      <v-row class="pa-10">
        <v-col cols="12" sm="6" md="4" v-for="person in authors" :key="person.sid" style="width:50%">
          <vue-aos animation-class="fadeIn animated">
            <kinesis-container event="move">
              <kinesis-element type="depth" :strength="5">
                <v-card>
                  <v-list-item three-line>
                    <v-list-item-content>
                      <kinesis-element type="depth" :strength="5">
                        <div class="text-overline mb-4">
                          {{ person.sid }}
                        </div>
                      </kinesis-element>
                      <kinesis-element type="depth" :strength="10">
                        <v-list-item-title class="text-h5 mb-1">
                          {{ person.name }}
                        </v-list-item-title>
                      </kinesis-element>
                      <kinesis-element type="depth" :strength="8">
                        <v-list-item-subtitle>{{ person.description }}</v-list-item-subtitle>
                      </kinesis-element>
                    </v-list-item-content>

                    <kinesis-element type="depth" :strength="10">
                      <v-list-item-avatar size="80" rounded>
                        <v-img :src="person.src"></v-img>
                      </v-list-item-avatar>
                    </kinesis-element>
                  </v-list-item>
                  <v-chip-group column class="pa-5">

                    <kinesis-element v-for="(c,i) in person.contributions" :key="c" type="depth" :strength="5+i*2">
                      <v-chip
                          :color="routes.find(r=>r.name===c)?'primary':null"
                          :link="!!routes.find(r=>r.name===c)"
                          :to="routes.find(r=>r.name===c)?routes.find(r=>r.name===c).path:null">
                        {{ c }}
                      </v-chip>
                    </kinesis-element>
                  </v-chip-group>
                </v-card>
              </kinesis-element>
            </kinesis-container>
          </vue-aos>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import HomeIntro from '../markdowns/foreword.md'
import SystemOne from '../assets/system_one.svg'
import anime from "animejs";
import {RouteRecordPublic} from "vue-router";

export default Vue.extend({
  name: "Home",
  data: () => ({
    animation_done: false,
    special_ones: [],
    authors: [
      {
        sid: "h1710169",
        name: "Zhao Yun",
        description: "uwu",
        src: "https://files.catbox.moe/jjpjhl.jpg",
        contributions: ['Superconductors', 'Website', 'Introduction to Superconductors', 'Animation', 'Easter Eggs', 'Applications of Superconductors', 'Framework', 'Hosting', 'Quiz']
      },
      {
        sid: "h1930006",
        name: "Hee Lai",
        description: "owo",
        src: "https://cdn.discordapp.com/attachments/886807281369497622/896720330192748544/KennyMcCormick.png",
        contributions: ['Quantum Computers', 'History', 'Introduction to Quantum Computers', 'Video', 'Anatomy', 'Applications of Quantum Computers', 'Quiz']
      },
      {
        sid: "h1710069",
        name: "Nithesh",
        description: "eating lemon",
        src: "https://cdn.discordapp.com/attachments/886807281369497622/896724950839345172/boy-avatar-4-1129037.png",
        contributions: ['Quantum Physics', 'Introduction to Quantum Physics', 'Superposition', 'Quantum Entanglement', 'Math', 'Quiz']
      }
    ],
    pages: [{
      src: "https://1.bp.blogspot.com/-CmGPCx78J7U/XbC8L7QzW_I/AAAAAAAAE14/fWozhMAgTB0W95MP-rbirIF_Pw08Tb7GgCLcBGAsYHQ/s1600/Google_Quantum_Nature_cover_art_small.png",
      path: "/math",
      name: "Quantum Computers",
      summary: "What is a quantum computer? How does it work? What can you do with a quantum computer?",
      hook: "Find out more"
    }, {
      src: "https://images.theconversation.com/files/73507/original/image-20150302-15941-1fyapoc.jpg?ixlib=rb-1.1.0&rect=8%2C561%2C5591%2C3302&q=45&auto=format&w=512",
      path: "/super",
      name: "Superconductors",
      summary: "The magical material of zero resistance and cool levitation, why is that so? And what does it have to do with quantum computing?",
      hook: "Learn more"
    }, {
      src: "https://cdn.discordapp.com/attachments/886807281369497622/896723176644550706/quantum-networkMB06-07HR-Scixel-2048x1152.png",
      path: "/cat",
      name: "Quantum Physics",
      summary: "How mysterious is quantum superposition? What is quantum entanglement? Lets learn the physics of the unknown!",
      hook: "Let's go"
    }]
  }),
  components: {
    HomeIntro, SystemOne
  },
  computed: {
    routes() {
      return this.$router.getRoutes().filter((route: RouteRecordPublic) => !route.meta || !route.meta.hidden)
    }
  },
  mounted() {
    const self = this;
    let timeline = anime.timeline({
      autoplay: true
    });
    timeline.add({
      duration: 2000,
      easing: 'easeInCubic',
      targets: '#background-1-img path',
      strokeDashoffset: [anime.setDashoffset, 0],
      delay: (el, i) => Math.pow(i, 0.9) * 7
    });
    timeline.add({
      duration: 2000,
      easing: 'easeOutQuad',
      targets: '#background-1-img path',
      'fill-opacity': [0, 1],
      'stroke-opacity': [1, 0],
      delay: (el, i) => i % 100 * 30,
      complete() {
        self.animation_done = true;
      }
    });
  }
});

</script>

<style scoped>
#background-1 {
  width: 100vw;
  height: 100vh;
  position: relative;
}

#background-1-img, #background-2-img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>
<style>
#background-1-img path {
  stroke-linecap: butt;
  stroke-linejoin: round;
  stroke-width: 1px;
  stroke: #aaaa;
}
</style>