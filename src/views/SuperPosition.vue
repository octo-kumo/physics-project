<template>
  <v-container>
    <SuperPos></SuperPos>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import SuperPos from "../markdowns/superposition.md";
import QuanEnt from "../markdowns/Quantum Entanglement.md";
import QuanSta from "../markdowns/Quantum State.md";
import QuantSup from "../markdowns/Quantum Superposition.md";
import SchrCat from "../markdowns/Schrödinger's cat.md";
import SuperPrin from "../markdowns/Superposition Principle.md";

export default Vue.extend({
  name: "Superposition",

  components: {
    QuanEnt
  }
});
</script>
<style>
img {
  max-width: 100%;
}
</style>
