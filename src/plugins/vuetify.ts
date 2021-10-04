import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// @ts-ignore
import VueKinesis from 'vue-kinesis'
// @ts-ignore
import vuescroll from 'vue-scroll'
Vue.use(vuescroll, {debounce: 600});
Vue.use(VueKinesis);
Vue.use(Vuetify);

export default new Vuetify({
    theme: {dark: true}
});
