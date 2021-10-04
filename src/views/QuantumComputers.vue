<template>
  <v-container>
    <Computer id="computer"></Computer>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Computer from '../markdowns/quantum_computer.md'

export default Vue.extend({
  name: 'Home',

  components: {
    Computer,
  },
})
</script>
<style>
#computer img {
  max-width: 100%;
}
</style>
