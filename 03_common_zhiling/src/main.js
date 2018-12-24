//引入 vue
import Vue from 'vue'
//引入app.vue 用他的内容来替换 div id = app
import App from './app.vue'
// 构建Vue 实例
new Vue({
    // 渲染内容的目的地
    el:'#app',
    // 渲染内容
    render:function (create) {
        return create(App); //App包含 template/script/style,最终生成DOM结构
    }
});