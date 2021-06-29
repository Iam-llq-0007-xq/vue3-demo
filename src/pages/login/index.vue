<template>
  <div>
    登录页面
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Login',
  setup() {
    const router = useRouter();
    const store = useStore();

    // methods
    const handleLogin = () => {
      store.dispatch('user/setToken', 'token');
      router.push('/');
    };

    return {
      handleLogin,
    };
  },
});
</script>

<style scoped></style>
