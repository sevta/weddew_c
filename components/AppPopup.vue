<template>
  <div
    class="fixed top-0 left-0 w-full h-full flex items-center justify-center"
  >
    <div
      class="absolute w-full h-full top-0 left-0 bg-black bg-opacity-75"
      @click="$emit('click')"
    ></div>
    <div class="p-5 z-10 bg-white rounded-md">
      <slot name="content"></slot>
    </div>
  </div>
</template>
