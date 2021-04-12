<template>
  <div>
    <div
      class="bg-black text-white text-center py-2 relative top-0 w-full"
      v-if="showPanel"
    >
      <div class="flex justify-between items-center max-w-4xl mx-auto">
        <div class="mx-auto">Preview {{ slug }}</div>
        <div class="cursor-pointer" @click="showPanel = false">
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <TemplateExample1 />
  </div>
</template>

<script>
import {
  defineComponent,
  onMounted,
  inject,
  onUnmounted,
  ref,
} from '@vue/composition-api'
import {
  useAsync,
  useContext,
} from '~/node_modules/@nuxtjs/composition-api/lib/entrypoint'

export default defineComponent({
  setup() {
    const showPanel = ref(true)
    const showNavbar = inject('showNavbar')
    const {
      params: {
        value: { slug: slug },
      },
    } = useContext()

    onUnmounted(() => {
      showNavbar.value = true
    })
    onMounted(() => {
      showNavbar.value = false
    })

    return {
      showPanel,
      slug,
    }
  },
})
</script>
