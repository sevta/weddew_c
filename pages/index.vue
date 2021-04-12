<template>
  <div class="flex items-center justify-center flex-col w-full min-h-screen">
    <div class="w-[600px]">
      <client-only>
        <HeroImg />
      </client-only>
    </div>
    <div class="">
      <span class="text-4xl font-bold text-purple-500 capitalize">
        Opening soon!</span
      >
      <span class="text-lg font-semibold underline"
        >Website dan Undangan Pernikahan Digital</span
      >
    </div>

    <div class="mt-10">
      <button
        class="px-10 py-3 font-semibold focus:outline-none text-white rounded-full bg-purple-500 cursor-pointer"
        @click="userRegister"
      >
        Get now
      </button>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  onMounted,
  ref,
  useContext,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $axios } = useContext()
    const message = ref()

    function userRegister() {
      $axios
        .post('/api/auth/register', {
          username: 'aduh',
          email: 'aduh email',
          password: 'aduh password',
        })
        .then((resp) => console.log(resp))
        .catch((err) => console.log(err))
    }

    return {
      message,
      userRegister,
    }
  },
})
</script>
