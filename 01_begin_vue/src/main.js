import Vue from 'vue'
import App from './app.vue'

new Vue({
    el:'#app',
    render:function (creater) {
        return creater(App); //App包含 template/script/style,最终生成DOM结构
    }
});