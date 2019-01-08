import Vue from 'vue';
import VueMaterial from 'vue-material';

import 'vue-material/dist/vue-material.min.css';
import '../../theme.scss';

Vue.use(VueMaterial);

let app = new Vue({
    el: '#vue-root'
});