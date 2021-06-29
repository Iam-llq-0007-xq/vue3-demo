<template>
  <i class="svg-icon">
    <component :is="icon"></component>
  </i>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Icon',
  props: {
    iconName: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const icon = require('./' + props.iconName + '.vue').default;

    return {
      icon,
    };
  },
});
</script>

<style scoped></style>
