<template>
    <div id="app">
        <div id="nav">
            <template v-for="(item,index) in routes">
                <router-link :to="item.path" v-bind:key="item.name+index">{{item.title}}</router-link>
                <template v-if="index !== routes.length-1">&nbsp;&nbsp;|&nbsp;&nbsp;</template>
            </template>
        </div>
        <router-view />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                routes: this.$router.options.routes
            }
        },
        created: function () {
            console.log(this.$router)
            console.log(this.routes)
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
