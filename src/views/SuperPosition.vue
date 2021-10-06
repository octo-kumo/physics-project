<template>
  <v-container>
    <SuperPos></SuperPos>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import SuperPos from "../markdowns/superposition.md";

export default Vue.extend({
  name: "Super Position",

  components: {
    SuperPos
  }
});
</script>
<style>
</style>
