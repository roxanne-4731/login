<template>
  <div class="uk-margin labeled-input uk-margin" >
    <div class="uk-position-relative" :class="{ focused: focused==true || value!='' }">
      <label>{{title}}</label>
      <span class="uk-form-icon uk-form-icon-flip" :uk-icon="'icon: '+icon"></span>
      <input :type="type"
        v-if="this.mask!==''"
             class="uk-input"
             :value="value"
             v-mask="mask"
             @input="emitChange($event.target.value)"
             @focus="focused=true"
             @blur="focused=false"/>
      <input v-else
             class="uk-input"
             :type="type"
             :value="value"
             @input="emitChange($event.target.value)"
             @focus="focused=true"
             @blur="focused=false"/>
    </div>
  </div>
</template>

<script>


  export default {
    name: 'floating-labeled-input',
    props: {
      autoFocus: {
        type: Boolean,
        default: false
      },
      title: String,
      type: {
        type: String,
        required: false,
        default: 'text'
      },
      icon: String,
      value: String,
      mask: {
        required: false,
        type: String,
        default: ''
      },

    },
    data() {
      return {
        focused: false,
      };
    },

    methods: {
      emitChange(val) {
        this.$emit('input', val);
      }
    }
  };
</script>

<style lang="scss" scoped>

  .labeled-input {
    label {
      position: absolute;
      left: auto;
      right: 10px;
      top: 50%;
      color: #999;
      background-color: #FFFFFF;
      padding: 0 7px;
      transform: translateY(-50%);
      transition: all 0.2s ease-out 0s;
    }
    .focused {
      label {
        top: -10px;
        color: #333;
        font-size: 12px;
        transform: translateY(0);
      }
    }
  }


</style>
