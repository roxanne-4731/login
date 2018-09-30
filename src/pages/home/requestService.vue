<template>
  <div class="">
    <AppLayout>
      <Content></Content>
    </AppLayout>

  </div>

</template>


<script>
  import * as types from '../../store/types';
  import AppLayout from '../../share/component/layout.component'
  import Content from './components/content'

  export default {
    name: 'home',
    data() {
      return {}
    },
    components: {
      AppLayout,
      Content
    },
    methods: {
      logout() {
        this.$store.dispatch(types.AUTH_ACT_LOGOUT);
      }
    }
  }
</script>


<style lang="scss">

</style>
