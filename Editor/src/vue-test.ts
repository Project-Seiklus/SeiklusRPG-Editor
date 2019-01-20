import Vue from 'vue';

export var app = new Vue({
    el: '#app',
    render: function(createElement) {
      return createElement('div', {}, this.message)
    },
    data: {
        message: 'Hello, Vue!'
    }
});

//하지만 이게 어디에서 동작하는 지 확인할 수 없었다고 한다...