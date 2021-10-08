<template>
  <v-card color="rgb(0, 0, 0, 0)" tile elevation="0">
    <v-card-title v-html="parse(value.question)"></v-card-title>
    <v-card-text v-if="value.answer!==-1">
      <v-alert
          :type="value.answer===value.correct?'success':'error'" v-html="parse(value.reason)">
      </v-alert>
    </v-card-text>
    <v-card-actions>
      <v-item-group style="width:100%" v-model="value.buffer">
        <v-row no-gutters class="rounded overflow-hidden fill-height">
          <v-col cols="6" :key="c" v-for="(c,i) in value.choices">
            <v-card
                @click="()=>{if(value.answer===-1)value.buffer=i}"
                class="choice py-10 fill-height" tile elevation="0"
                :color="value.answer===-1?(i===value.buffer?(['var(--color-1)', 'var(--color-2)', 'var(--color-3)', 'var(--color-4)'])[i%4]:'dark'):
                (i===value.correct?'var(--color-2)':i===value.answer?'var(--color-4)':'dark')">
              <v-card-text style="font-size: 1.2em" class="text-center" v-html="parse(c)"></v-card-text>
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
  props: ['value', 'parse']
});
</script>

<style scoped>
.choice {
  --color-1: #92cbfa;
  --color-2: #a8fc7d;
  --color-3: #ffb084;
  --color-4: #ff8096;
}

.v-application.theme--dark .choice {
  --color-1: #194a68;
  --color-2: #2c5d14;
  --color-3: #8f430d;
  --color-4: #8f172d;
}
</style>