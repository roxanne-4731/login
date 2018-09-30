<template>
  <div class=" uk-container uk-flex">
    <!--<Steps></Steps>-->
    <button @click="get" > get it </button>
  </div>


</template>

<script>
  import Steps from './steps'
import axios from 'axios'
  export default {
    data(){
      return {
        image : [ ]
      }
    },
    components: {
      Steps
    },
    methods:{
      get(){
        axios.get('https://app.smartserviceco.ir/service/type/list')
          .then(res => console.log(res))
      }
    }
  }
</script>


<style lang="scss">

</style>
