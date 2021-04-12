<template>
  <div class="relative py-5">
    <div class="shadow-lg absolute top-0 left-0 w-full h-full opacity-40"></div>
    <div
      class="relative max-w-4xl z-10 mx-auto flex items-center justify-between"
    >
      <nuxt-link to="/" class="text-lg font-bold uppercase text-purple-500"
        >weddew</nuxt-link
      >
      <div class="flex items-center justify-center space-x-8 text-sm">
        <nuxt-link to="/template">Template</nuxt-link>
        <div
          class="bg-purple-500 text-white rounded-full py-1 px-3 cursor-pointer"
          @click="$emit('on-signin-click')"
        >
          Sign in
        </div>
      </div>
    </div>
  </div>
</template>
