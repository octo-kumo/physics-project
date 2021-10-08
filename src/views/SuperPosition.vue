<template>
  <v-container>
    <SchrCat/>
    <SuperPrin/>

    <QuantState/>
    <QuantSuper/>
    <QuantEntag/>

  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import QuantEntag from "../markdowns/Quantum Entanglement.md";
import QuantState from "../markdowns/Quantum State.md";
import QuantSuper from "../markdowns/Quantum Superposition.md";
import SchrCat from "../markdowns/Schrödinger's cat.md";
import SuperPrin from "../markdowns/Superposition Principle.md";

export default Vue.extend({
  name: "QuantumPhysics",

  components: {
    SuperPrin,
    QuantState,
    QuantSuper,
    QuantEntag,
    SchrCat,
  }
});
</script>
<style>
img {
  max-width: 100%;
}
</style>
