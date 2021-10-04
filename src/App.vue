<template>
  <v-app>
    <v-app-bar
        app
        shrink-on-scroll
        dense
        prominent
        fade-img-on-scroll
        color="dark"
        dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ $route.name }}</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
        app
        v-model="drawer"
        temporary
    >
      <v-img
          width="70%"
          class="mx-auto my-5"
          src="@/assets/quantum-computing.png"></v-img>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Quantum Computers
          </v-list-item-title>
          <v-list-item-subtitle>
            and related stuff
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list
          nav
          dense>
        <v-list-item v-for="route in routes" :key="route.path" :to="route">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ route.name }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <v-footer absolute>
        <v-switch
            v-model="$vuetify.theme.dark"
            inset
            label="Dark Theme"
            persistent-hint
        ></v-switch>
      </v-footer>
    </v-navigation-drawer>
    <v-main id="main-view">
      <router-view/>
    </v-main>
    <v-footer
        app
        absolute
        padless>
      <v-row
          justify="center"
          no-gutters>
        <v-btn
            v-for="route in routes"
            :key="route.path"
            :to="route"
            class="mx-2 my-1"
            text
        >
          {{ route.name }}
        </v-btn>
        <v-col
            class="py-2 text-center"
            cols="12">
          Group Members ·
          <v-btn>Zhao Yun</v-btn>
          <v-btn>Nithesh</v-btn>
          <v-btn>Hee Lai</v-btn>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import {RouteRecordPublic} from 'vue-router'

export default Vue.extend({
  name: 'App',

  data: () => ({
    group: null,
    drawer: false,
  }),
  components: {},
  computed: {
    routes() {
      return this.$router.getRoutes().filter((route: RouteRecordPublic) => !route.meta || !route.meta.hidden)
    }
  }
});
</script>
<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.11.1/katex.min.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css';
@import './assets/styles/github.css'; /* code highlighting */

.theme--light.v-application code, .theme--dark.v-application code {
  background-color: transparent !important;
}
</style>