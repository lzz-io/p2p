<template>
  <div class="ajax">
    <h1>This is an ajax page</h1>
  </div>
</template>


<script>
import axios from '../ajax.js'
// import axios from 'axios'
// const axios = require('axios')

// console.log('Ajax')

// const instance = axios.create({
//   baseURL: '/',
//   timeout: 3000
//   // headers: {'X-Custom-Header': 'foobar'}
// })
// let info = null
// let temp =

export default {
  name: 'ajax',
  // temp
  data() {
    return{
      info:{}
    }
  },

  mounted: function() {
    this.getInfo()
  },

  methods: {
    getInfo: function() {
      axios.get('/api').then((response) => {
        console.log(1,response)
        this.info = response.data
      })

      // .then(response => (info = response))
      // console.log(2,temp)
      console.log(3,this.info)
    }

  }
}
</script>
