<template>
  <v-card color="rgb(0, 0, 0, 0)" tile elevation="0">
    <v-card-title>{{ value.question }}</v-card-title>
    <v-card-actions>
      <v-item-group style="width:100%" v-model="value.buffer">
        <v-row no-gutters class="rounded overflow-hidden fill-height">
          <v-col cols="6" :key="c" v-for="(c,i) in value.choices">
            <v-card
                @click="value.buffer=i"
                class="choice py-10 fill-height" tile elevation="0"
                :color="i===value.buffer?(['var(--color-1)', 'var(--color-2)', 'var(--color-3)', 'var(--color-4)'])[i]:'dark'">
              <v-card-text style="font-size: 1.2em" class="text-center">{{ c }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-item-group>
    </v-card-actions>
  </v-card>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: "Question",
  props: ['value']
});
</script>

<style scoped>
.choice {
  --color-1: #66a7d2;
  --color-2: #6db448;
  --color-3: #ff7f31;
  --color-4: #fa385b;
}

.v-application.theme--dark .choice {
  --color-1: #194a68;
  --color-2: #2c5d14;
  --color-3: #8f430d;
  --color-4: #8f172d;
}
</style>