<template>
  <v-container>
    <v-flex xs12 sm12>
      <v-parallax
          height="600" src="https://techhq.com/wp-content/uploads/2019/09/40645906341_c38b22d693_k.jpg">
        <v-layout column align-center justify-center>
          <h1>Quantum Computer</h1>
        </v-layout>
      </v-parallax>
    </v-flex>
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

.hover-text {
  display: none;
}

.hover-text:hover {
  display: block;
}
</style>
