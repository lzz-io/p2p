<template>
    <div id="app">
        <Header />

        <router-view />

        <Footer />
    </div>
</template>

<script>
    import Header from "./components/Header";
    import Footer from "./components/Footer";

    export default {
        components: {
            Header,
            Footer
        },
        data() {
            return {
                routes: this.$router.options.routes
            }
        },
        // created: function () {
        //     console.log(this.$router)
        //     console.log(this.routes)
        // }
    }
</script>

<style scoped>
    #app {
        font-family: '宋体', 'Avenir', Helvetica, Arial, sans-serif;
        /*text-align: center;*/
        /*color: #2c3e50;*/
        color: #666666;
        /*margin-top: 60px;*/
    }

    div {
        border: 1px solid #000000;
    }
</style>
