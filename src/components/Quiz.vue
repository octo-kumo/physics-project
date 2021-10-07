<template>
  <v-stepper v-model="current" non-linear>
    <v-stepper-header>
      <template v-for="(q,i) in value">
        <v-stepper-step
            class="text-truncate"
            editable
            edit-icon="$complete"
            :key="q.title"
            :complete="q.answer!==-1"
            :rules="[() => q.answer===-1||q.answer===q.correct]"
            :step="i+1">
          {{ q.title }}
        </v-stepper-step>
        <v-divider :key="i"/>
      </template>

      <v-stepper-step
          :editable="value.every(q=>q.answer!==-1)"
          edit-icon="$complete"
          :complete="value.every(q=>q.answer!==-1)"
          :step="value.length+1">
        Results
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content
          :key="i"
          :step="i+1"
          v-for="(q,i) in value">
        <Question v-model="value[i]"/>
        <div class="pa-2">
          <v-btn color="primary" @click="submit(i)">{{ value[i].answer === -1 ? 'Submit' : 'Continue' }}</v-btn>
          <v-btn text>Cancel</v-btn>
        </div>
      </v-stepper-content>
      <v-stepper-content :step="value.length+1">
        <v-card color="rgb(0, 0, 0, 0)">
          <v-card-title>Results</v-card-title>
          <v-card-subtitle>Have you done well?</v-card-subtitle>
          <v-card-text>You received a score of
            {{ value.filter(q => q.answer === q.correct).length }}/{{ value.length }}!
          </v-card-text>
        </v-card>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import Vue from "vue";
import Question from "@/components/Question";

export default Vue.extend({
  name: "Quiz",
  props: ['value'],
  data: () => ({
    current: 1
  }),
  components: {Question},
  methods: {
    submit(i) {
      if (this.value[i].answer !== -1) this.current = Math.min(this.value.length + 1, i + 2)
      else this.value[i].answer = this.value[i].buffer;
    }
  }
});
</script>

<style scoped>

</style>