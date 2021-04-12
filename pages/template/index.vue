<template>
  <div class="relative">
    <div class="max-w-4xl mx-auto">
      <div class="text-3xl mt-10">template</div>
      <div class="mt-10 grid grid-cols-3 gap-5">
        <div class="relative" v-for="item in 12" :key="item">
          <div class="h-60 rounded-md overflow-hidden">
            <img
              class="object-cover object-center"
              src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
          <div class="py-3 space-y-2">
            <div class="text-sm">Example1</div>
            <div class="text-sm font-semibold">Rp 200.000</div>
            <button class="px-4 py-2 text-sm w-full bg-purple-500 text-white">
              Coba Sekarang
            </button>
            <nuxt-link
              to="/template/preview-1"
              class="px-4 py-2 text-center rounded-full text-sm w-full text-purple-500"
            >
              Preview
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
