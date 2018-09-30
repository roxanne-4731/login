<template>
  <div class="has-separate-password" ref="separatePassword">
    <div class="uk-grid-small m0" uk-grid>
      <input
        v-for="i in chars"
        :key="i"
        class="uk-input uk-text-center uk-background-muted"
        :class="'uk-width-1-'+chars"
        type="number"
        autofocus
        maxLength="1"
        size="1"
        min="0"
        max="9"
        @input="commitChange()"
        v-model="values[i-1]"/>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';

  export default {
    props: {
      chars: {
        required: true,
        type: Number
      }
    },
    data: () => {
      return {
        values: []
      };
    },
    mounted: function() {
      const separatePassword = this.$el;
      $(separatePassword).on('keyup', 'input', goToNextInput(separatePassword));
      $(separatePassword).on('keydown', 'input', onKeyDown);
      $(separatePassword).on('click', 'input', onFocus);
    },
    methods: {
      commitChange: function() {
        if (this.values.length === 5) {
          this.$emit('send-data', this.values.join(''));
          this.values = [];
        }
      }
    }
  };

  function goToNextInput(separatePassword) {
    return e => {
      const key = e.which;
      const t = $(e.target);
      let sib = t.next('input');

      if (key !== 9 && (key < 48 || key > 57) && (key < 96 || key > 105)) {
        e.preventDefault();
        return false;
      }

      if (key === 9) {
        return true;
      }

      if (!sib || !sib.length) {
        sib = $(separatePassword)
          .find('input')
          .eq(0);
      }
      sib.select().focus();
    };
  }

  function onKeyDown(e) {
    const key = e.which;
    if (key === 9 || (key >= 48 && key <= 57) || (key > 95 && key < 106)) {
      return true;
    }

    e.preventDefault();
    return false;
  }

  function onFocus(e) {
    $(e.target).select();
  }
</script>

<style lang="scss">
  div.has-separate-password {
    direction: ltr;
    input {
      width: 18%;
      border-top: 0;
      border-right: 0;
      border-left: 0;
      border-bottom-width: 3px;
      font-size: 30px;
      margin: 0 1%;
      padding-top: 40px;
      padding-bottom: 30px;
      &::selection {
        color: #666666;
        background-color: transparent;
      }
    }
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
</style>
