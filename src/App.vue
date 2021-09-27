<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <div class="d-flex align-center">
        <v-toolbar-title>Quantum</v-toolbar-title>
      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import 'markdown-it-latex/dist/index.css'

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>
<style>
@import './assets/styles/github.css';

.theme--light.v-application code {
  background-color: transparent !important;
}
</style>