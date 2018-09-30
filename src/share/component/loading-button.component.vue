<template>
  <button
    class="uk-button"
    :class="{'uk-disable':loading}"
    :disabled="loading"
    :type="type"
    @click="$emit('click', $event)">
    <span v-show="!loading">
      <slot></slot>
    </span>
    <div v-if="loading" uk-spinner="ratio:0.8"></div>
  </button>
</template>

<script>
export default {
  props: {
    loading: {
      required: false
    },
    type: {
      default: 'button'
    }
  }
};
</script>
