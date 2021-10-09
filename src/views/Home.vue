<template>
  <v-container fluid class="pa-0">
    <div id="background-1">
      <transition name="fade">
        <SystemOne id="background-1-img" v-if="!animation_done"></SystemOne>
        <v-img id="background-2-img" src="@/assets/system_one.jpg" v-if="animation_done"></v-img>
      </transition>
    </div>
    <v-bottom-navigation style="position:sticky;top:0;bottom:unset;">
      <v-btn v-for="route in routes"
             :key="route.path"
             :to="route.path">
        <span>{{ route.name }}</span>
        <v-icon>{{ route.meta.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-container class="pt-5">
      <HomeIntro/>
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
    animation_done: false
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
      easing: 'easeInOutSine',
      targets: '#background-1-img path',
      strokeDashoffset: [anime.setDashoffset, 0],
      delay: (el, i) => i * 5
    });
    timeline.add({
      duration: 1500,
      easing: 'easeOutQuad',
      targets: '#background-1-img path',
      'fill-opacity': [0, 1],
      'stroke-opacity': [1, 0],
      delay: (el, i) => i * 2,
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