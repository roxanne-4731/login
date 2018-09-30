<template>
  <div>
    <AppHeader></AppHeader>
    <div id="main-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import '../../assets/style/style.scss';
  import AppHeader from './header-component';

  export default {
    name: 'app-layout',
    components: {
      AppHeader
    }
  };
</script>

<style>
</style>
