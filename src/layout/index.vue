<template>
  {{title}}
  <app-menu color="#000" style="border: 1px solid pink;" />
  <div class="app-layout">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Menu } from './components/index';

export default defineComponent({
  name: 'Layout',
  components: {
    AppMenu: Menu,
  },
  setup() {
    const title = '----- Layout -----';
    return {
      title,
    };
  },
});
</script>

<style scoped></style>
