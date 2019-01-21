import Vue from 'vue/dist/vue.common';

function yyyyMMddHHmmss(date:Date):string {
    function pad2(n) {  // always returns a string
        return (n < 10 ? '0' : '') + n;
    }

    return `${date.getFullYear()}년 ${pad2(date.getMonth() + 1)}월 ${pad2(date.getDate())}일 `
         + `${pad2(date.getHours())}시 ${pad2(date.getMinutes())}분 ${pad2(date.getSeconds())}초`;
}

export var DataBind = new Vue({
    el: "#data-bind",
    data: {
        Message: "Hello, Vue!",
        Time: "(시간)"
    }
});

function UpdateDate(target):void {
    target.Time = `${yyyyMMddHHmmss(new Date())}`;
}

setInterval(UpdateDate, 1000, DataBind);

UpdateDate(DataBind);