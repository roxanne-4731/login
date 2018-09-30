
<template>
  <router-view/>
</template>

<script>
  import Vue from 'vue';
  import Vuelidate from 'vuelidate';
  import '../node_modules/uikit/dist/css/uikit-rtl.css';
  import UIkit from 'uikit';
  import Icons from 'uikit/dist/js/uikit-icons';



  Vue.use(Vuelidate);
  UIkit.use(Icons);
  export default {
    name: 'App'
  }


</script>

<style>

</style>
