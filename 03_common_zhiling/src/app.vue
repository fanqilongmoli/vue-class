<template>
    <div>
        <pre>
                * v-text 是元素的innerText只能在双标签中使用
                * v-html 是元素的innerHTML，不能包含<!-- {{xxx}} -->
                * v-if 元素是否移除或者插入
                * v-show 元素是否显示或隐藏
                * v-model
        </pre>
        v-text
        <span v-text="text"></span>
        <hr/>
        v-html
        <span v-html="html"></span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: "fanqilong",
                html: `
                        <ul>
                            <li>123</li>
                            <li>456</li>
                        </ul>
                      `
            }
        }
    }
</script>

<style scoped>

</style>