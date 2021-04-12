<template>
  <div>
    <AppNavbar v-if="showNavbar" />
    <nuxt />
  </div>
</template>

<script>
import { defineComponent, provide, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const showNavbar = ref(true)

    provide('showNavbar', showNavbar)

    return {
      showNavbar,
    }
  },
})
</script>
