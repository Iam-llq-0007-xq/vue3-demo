<template>
  <div>
    <h3>
      ----- Menu ------ 
      <br />
    </h3>
    <div>{{ propsColor }} | {{ color }}</div>
    <div>menu可以参考 panjiachen-admin那个vue2框架</div>
    <ul>
      <template v-for="route in passRoutes" :key="route.name">
        <li v-if="route.meta">
          {{ route.meta.title }}

          <ul v-if="route.children">
            <template v-for="child in route.children" :key="child.name">
              <li @click="handleLink(child)">
                {{ child.meta.title }}
              </li>
            </template>
          </ul>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Menu',
  props: {
    color: {
      default: '',
    },
  },
  setup(props, { emit }) {
    const store = useStore();
    const router = useRouter();

    const passRoutes = computed<any[]>(() => store.state.auth.routes);
    const propsColor = computed<string>(() => props.color);
    console.log('权限：', passRoutes.value);

    const handleLink = (item: any) => {
      router.push({ name: item.name });
    };

    return {
      passRoutes,
      propsColor,
      handleLink,
    };
  },
});
</script>

<style scoped></style>
