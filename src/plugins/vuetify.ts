import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// @ts-ignore
import VueKinesis from 'vue-kinesis'
// @ts-ignore
import vuescroll from 'vue-scroll'
// @ts-ignore
import VueAos from 'vue-aos'

Vue.use(VueAos);
Vue.use(vuescroll, {debounce: 600});
Vue.use(VueKinesis);
Vue.use(Vuetify);
Vue.directive('visible', function (el, binding) {
    el.style.visibility = !!binding.value ? 'visible' : 'hidden';
});
export default new Vuetify({
    theme: {dark: true}
});
