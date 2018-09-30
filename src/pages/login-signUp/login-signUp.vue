<template>

  <div id="loginSignup" >
    <div class="uk-logo">
      <img src="../../assets/img/logo.svg" class="uk-align-center weedoo-logo">
    </div>
    <div>
      <div class="uk-margin-small-top">
        <ul class=" uk-tab uk-flex-center uk-table-small mb0" data-uk-tab="{connect:'#my-id'}">
          <li><a class="tabs" href="">عضویت</a></li>
          <li><a href="" class="tabs">ورود</a></li>
        </ul>
        <ul id="my-id" class="uk-switcher">
          <li><a href="#" id="autoplayer" data-uk-switcher-item="next"></a>
            <AppSignUp></AppSignUp>
          </li>
          <li>
            <AppLogin></AppLogin>
          </li>
        </ul>
      </div>
    </div>

  </div>

</template>

<script>
  import AppSignUp from './components/signing-component';
  import AppLogin from './components/loginpage.component';

  export default {
    name: 'app-layout',
    components: {
      AppSignUp,
      AppLogin
    }
  };
</script>

<style lang="scss">

  .weedoo-logo{
    width: 150px ; height: 150px
  }

</style>
