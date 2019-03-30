<template>
    <div id="crud" class="crud">
        <h1>编辑姓名：<input type="text" v-model="name" /></h1>
        <h1>姓名：{{ name }}</h1>
        <h1>年龄：{{ age }}</h1>
        <h1>学校：{{ school }}</h1>
    </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'crud',
        data() {
            return {
                name: '小明',
                age: 18,
                school: '光明小学',
            }
        },
    }

</script>
