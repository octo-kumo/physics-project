<template>
  <v-container fluid class="pa-0">
    <transition name="fade">
      <div id="background-1">
        <SystemOne id="background-1-img"></SystemOne>
      </div>
    </transition>
    <v-bottom-navigation>
      <v-btn v-for="route in routes"
             :key="route.path"
             :to="route.path">
        <span>{{ route.name }}</span>
        <v-icon>{{ route.meta.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <HomeIntro/>
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
      delay(el, i) {
        return i * 5
      },
      direction: 'alternate',
      loop: true,
    });
    timeline.add({
      duration: 1500,
      easing: 'easeOutQuad',
      targets: '#background-1-img path',
      'fill-opacity': [0, 1],
      'stroke-opacity': [1, 0],
      delay(el, i) {
        return i * 5
      },
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

#background-1-img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

#background-2-img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
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