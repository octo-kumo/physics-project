<template>
  <v-container class="pa-10">
    <Intro />
  </v-container>
  
</template>

<script>
import Vue from 'vue';
import Intro from '../markdowns/foreword.md'

export default Vue.extend({
  name: "Home",

  components: {
    Intro,
  },
});

</script>

<style scoped>

</style>