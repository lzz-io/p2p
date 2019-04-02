<template>
    <header id="header">
        <!--logo-->
        <div class="container p-0">
            <div class="row">
                <div class="col-md-6">
                    <a class="d-block" href="/" title="陆金所">
                        <h1><img alt="陆金所" src="../assets/logo.png"></h1>
                    </a>
                </div>
            </div>
        </div>

        <!--导航栏-->
        <nav id="navbar">
            <div class="container p-0">
                <ul class="nav">
                    <li class="nav-item col-3 col-md-2 p-0" v-bind:key="item.name+index" v-for="(item,index) in routes">
                        <router-link :to="item.path" class="nav-link">{{item.meta.title}}</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                routes: this.$router.options.routes,
            }
        },
        props: {
            msg: String,
            // routes: Object
        },
        mounted() {
            console.debug(this.routes)
        },
    }
</script>

<style scoped>
    #navbar {
        background-color: #1d2c69;
        font-family: 微软雅黑;
    }

    .active, .router-link-exact-active, .nav-link:hover {
        background-color: #5556ab;
    }

    /*.nav-item{
        margin-right: 1px;
    }*/
    .nav-link {
        /*width: 130px;*/
        height: 40px;
        line-height: 40px;
        font-weight: 700;
        color: #ffffff;
        display: block;
        text-align: center;
        padding: 0;
    }
</style>