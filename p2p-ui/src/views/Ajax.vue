<template>
    <div class="ajax">
        <h1>This is an ajax page</h1>
    </div>
</template>


<script>
    export default {
        name: 'ajax',
        // temp
        data() {
            return {
                info: {}
            }
        },

        mounted: function () {
            this.getInfo()
        },

        methods: {
            getInfo: function () {
                axios.get('/api').then((response) => {
                    console.log(1, response)
                    this.info = response.data
                })

                // .then(response => (info = response))
                // console.log(2,temp)
                console.log(3, this.info)
            }

        }
    }
</script>
