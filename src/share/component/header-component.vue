<template>
  <div class=" uk-width-1-1">
    <nav class="uk-padding uk-padding-remove-bottom uk-padding-remove-top"uk-navbar>

      <div class="uk-navbar-right">
        <a class="uk-navbar-item uk-logo uk-margin-left" href="#">
                <!--<span class="logo">-->
                    <!--<img v-if="isScroll" src="../assets/images/logo.svg"/>-->
                    <!--<img v-else src="../assets/images/logo-sefid.svg"/>-->
                <!--</span>-->
        </a>
        <ul class="uk-navbar-nav uk-text-bold">
          <li><a href="#">خدمات</a></li>
          <li><a href="#">خدمت رسان</a></li>
          <li><a href="#">دانلود اپلیکیشن</a></li>
        </ul>
      </div>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li>
            <a href="#" uk-icon ="icon:sign-in"></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "app-header",
    data() {
      return {
      };
    }
  };
</script>
<style  lang="scss">

  nav {
    transition: all 0.2s linear;
  }

  .logo {
    width: 70px;
  }

  ul > li > a {
    color: #fff;
    min-height: 30px;
  }

  .uk-navbar-nav > li.uk-active > a {
    background-color: #41b26e;
    color: #fff;
  }
  ul.text > li > a {
    color: #333 !important;
  }
  /* nav {
      background-color: transparent;
  } */
</style>

