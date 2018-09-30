<template>

  <div id="login-page">
    <div class="uk-section-small pt0">
      <div class="uk-container uk-container-large">
        <div class="uk-flex uk-flex-center">
          <div class="form-field uk-width-1-1@s uk-width-1-4@l uk-width-1-3@xl uk-border-rounded uk-padding-small">

            <!--first part-->
            <div id="username-card" v-if="seen" class="uk-card-bady">

              <div class="uk-animation-slide-bottom uk-margin">
                <h3 class="uk-form-label ">جهت ورود شماره تلفن خود را وارد نمایید</h3>
                <!--username and it's icons-->
                <form class="form" @submit.prevent="verifyUsername()">
                  <div class="uk-margin">
                    <input class="uk-input" type="text" maxlength="11" size="11" min="0" max="9"
                           placeholder="*********09"
                           v-model="user.username"
                    >
                  </div>
                  <span class="uk-text-danger" v-if="preLoginError">{{preLoginError}}</span>
                  <!--the button for get the message-->
                  <div class="uk-flex uk-flex-left">
                    <loading-button
                      class="uk-button-primary uk-padding uk-padding-remove-top uk-padding-remove-bottom uk-button-small"
                      type="submit"
                      :disabled="$v.user.username.$invalid"
                      :loading="isLoading">
                      <span uk-icon="icon: chevron-right">دریافت کد</span>
                    </loading-button>
                  </div>

                </form>
              </div>


            </div>

            <!--second part-->
            <form @submit.prevent="login()" class="uk-animation-slide-bottom" v-else>

              <div class="uk-text-center">
                <h2 class="uk-form-label"> در انتظار ارسال پیامک به شماره {{user.username}} <a
                  href="#">شماره غلط ؟</a></h2>
              </div>
              <!--entering code-->
              <verification-code :chars="5" v-model="$v.user.password.$model"
                                 v-on:send-data="login($event)"></verification-code>
              <div class="uk-margin uk-clearfix">

                <loading-button
                  class=" uk-float-left uk-button-primary uk-padding uk-padding-remove-top uk-padding-remove-bottom uk-button-small"
                  type="submit"
                  :disabled="$v.user.password.$invalid"
                  :loading="isLoading">
                  <span uk-icon="icon: chevron-right">ورود</span>
                </loading-button>

                <button type="button"
                        class="uk-float-right uk-button uk-button-primary  uk-button-small uk-form-icon-flip">
                  <span href="index.html" uk-icon="icon: chevron-left"></span>بازگشت
                </button>
              </div>


            </form>

            <!--  the sign up link-->
            <div class="uk-flex uk-flex-right">

              <router-link to="/signup">
                <a class="uk-link-reset uk-text-primary" href="#">عضویت</a>
              </router-link>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import {helpers, minLength, required} from 'vuelidate/lib/validators';
  import * as types from '../../../store/types';
  import VerificationCode from './verification-code.component';
  import * as authService from '../../../services/auth.service';
  import store from '../../../store';
  import $ from 'jquery';

  const phone = helpers.regex('phone', /^09\d{9}$/);

  export default {
    components: {
      VerificationCode
    },
    data() {
      return {
        isLoading: false,
        isPassLoading: false,
        loginError: null,
        isFocused: false,
        seen:true,
        user: {
          username: '',
          password: ''
        },
        preLoginError: ''
      };
    },
    validations: {
      user: {
        username: {
          required,
          phone
        },
        password: {
          required,
          minLength: minLength(5)
        }
      }
    },
    computed: {
      isLogedin() {
        return this.$store.getters[types.AUTH_GET_IS_LOGEDIN];
      }
    },
    methods: {
      verifyUsername() {
        this.isLoading = true;
        authService
          .preAuthenticate(this.user.username)
          .then(result => {
            this.seen =!this.seen;
            this.isLoading = false;
            this.preLoginError = '';
          })
          .catch(() => {
            this.preLoginError = 'شماره موبایل صحیح نمی باشد';
            this.isLoading = false;
            this.resetErrors();
          });
      },
      resetErrors(force = false) {
        if (force) {
          this.loginError = null;
          this.preLoginError = null;
        } else {
          setTimeout(() => {
            this.loginError = null;
            this.preLoginError = null;
          }, 1000);
        }
      },
      login(data) {
        this.user.password = data;
        this.isPassLoading = true;
        this.isLoading = false;
        if ($(window).width() < 960) {
          store.commit(types.APP_SET_IS_SIDEBAR_OPEN, false);
        } else {
          store.commit(types.APP_SET_IS_SIDEBAR_OPEN, true);
        }
        this.$store.dispatch(types.AUTH_ACT_LOGIN, this.user).then((result) => {
          this.$router.push('/');
        }).catch(() => {
          this.loginError = 'کد وارد شده صحیح نمی باشد';
          this.isPassLoading = false;
          this.resetErrors();
        });
      }
    }


  };

</script>

<style lang="scss">
  .uk-link-text {
    color: dodgerblue !important;
  }

  .form-field {
    border: 1px solid lightgray;

  }

</style>
