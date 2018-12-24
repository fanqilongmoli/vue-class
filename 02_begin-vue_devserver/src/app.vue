<template>
    <div>
        我们的第一个vue程序{{text}}
        <br/>
        输入:<input type="text" v-model="text"/>
        <br/>
        <ul>
            <li v-for="person in list">{{person.name}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        // 配置
        // 类似$scope.xxx = '初始化'
        //data:function () {

        //}
        data(){
            return{ //放数据的地方
                text:'大家好',
                list:[
                    {
                        name:'fanqilong'
                    },
                    {
                        name:'moli'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>