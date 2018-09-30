<template>

  <div id="signup-page">
    <div class="uk-section-small pt0">
      <div class="uk-container uk-container-large">
        <div class="uk-flex uk-flex-center">
          <div class="form-field uk-border-rounded uk-padding-small uk-grid-small uk-child-width-1-1@l  uk-child-width-1-1@m uk-child-width-1-1@s ">
            <div class="uk-padding-remove">
              <div class="uk-grid uk-child-width-1-2@l  uk-child-width-1-2@m uk-child-width-1-1@s uk-margin-small">
                <div class="uk-margin">
                  <floating-labeled-input
                    title="نام"
                    v-model="input.firstName">
                  </floating-labeled-input>
                </div>
                <div>
                  <floating-labeled-input
                    v-model="input.lastName"
                    title="نام خانوادگی">
                  </floating-labeled-input>
                </div>
              </div>
            </div>
            <div>
              <floating-labeled-input
                v-model="input.phoneNumber"
                title="شماره موبایل"
                mask="09#########"
                icon="receiver">
              </floating-labeled-input>
            </div>
            <div>
              <floating-labeled-input
                v-model="input.password"
                title="رمز"
                icon="lock">
              </floating-labeled-input>
            </div>
            <div>

              <button
                      class="uk-button uk-button-primary uk-width-1-1">
                submit
              </button>


            </div>

          </div>


        </div>

      </div>
    </div>
  </div>


</template>

<script>

  import axios from 'axios';

  export default {
    data() {
      return {
        input: {
          firstName: '',
          lastName: '',
          phoneNumber: '',
          password: '',
          r_password: ''
        }
      }

    },

    name: 'app-sign-up',
    methods: {
      signup() {
        axios.post('http://localhost:3000/login', {
          firstname: this.input.firstName,
          lastname: this.input.lastName,
          phoneNumber: this.input.phoneNumber,
          password: this.input.password,
          //   if( this.input.password == this.input.r_password)
          // {
          //   password: this.input.r_password;
          // }
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }


</script>

<style lang="scss">
  .uk-link-text {
    color: dodgerblue !important;
  }

  .form-field {
    border: 1px solid lightgray;

  }
</style>
