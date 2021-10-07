<template>
  <v-container>
    <SuperPos></SuperPos>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import SuperPos from "../markdowns/superposition.md";
import QuanEnt from "../markdowns/Quantum Entanglement.md";

export default Vue.extend({
  name: "Superposition",

  components: {
    SuperPos
  }
});
</script>
<style>
img {
  max-width: 100%;
}
</style>
