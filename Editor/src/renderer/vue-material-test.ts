import Vue from 'vue/dist/vue.common';
import VueMaterial from 'vue-material';

import { import_css, RootType } from './CssImporter';
import_css("vue-material.min.css", RootType.VueMaterial);
import_css("theme.css");

/** 렌더러의 주 진입점입니다. */
export default function Main(): void {
    Renderer.Init();
}

export class Renderer {
    
    /** [읽기 전용] HTML DOM 중에 id값이 vue-root가 대상인 Vue 개체입니다. */
    public static get app(): Vue { return this._app; }

    /** HTML DOM 중에 id값이 vue-root가 대상인 Vue 개체입니다. */
    private static _app: Vue;
    
    /** 렌더러를 준비합니다. */
    public static Init():void {
        
        Vue.use(VueMaterial);
        
        this._app = new Vue({ el: "#vue-root" });
        
    }
}