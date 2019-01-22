import Vue from 'vue/dist/vue.common';
import VueMaterial from 'vue-material';

import importCss, { RootType } from './CssImporter';
importCss("vue-material.min.css", RootType.VueMaterial);
importCss("theme.css");


Vue.use(VueMaterial);

let app = new Vue({
    el: "#vue-root"
});