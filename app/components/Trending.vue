<script setup>
import config from '~/config/config'

const props = defineProps({
  trending: Array,
})

const containerRef = ref(null)
const slides = ref(props.trending)

useSwiper(containerRef, {
  loop: false,
  breakpoints: {
    0: { slidesPerView: 3 },
    800: { slidesPerView: 4 },
    1320: { slidesPerView: 6 },
  },
})
</script>

<template>
  <ClientOnly>
    <div
      id="trending"
      class="mt-5"
    >
      <h1 class="heading">
        Trending
      </h1>
      <swiper-container
        ref="containerRef"
        class="flex justify-center items-center"
      >
        <swiper-slide
          v-for="item in slides"
          :key="item.id"
          class="text-center"
        >
          <div class="item flex-col px-1">
            <NuxtLink
              class="w-full h-0 pb-[150%] bg-lightbg relative overflow-hidden"
            >
              <Image
                class="absolute inset-0 w-full h-full object-cover"
                :src="item.poster"
                :alt="item.title"
              />
              
            </NuxtLink>
            <h2
              :title="item.title"
              class="title cursor-pointer text-sm text-center truncate w-full mt-2"
            >
              {{ item.title }}
            </h2>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </ClientOnly>
</template>
