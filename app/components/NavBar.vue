<script setup>
import { useSidebarStore } from '@/stores/sidebar'
import config from '~/config/config'

const sidebar = useSidebarStore()
</script>

<template>
  <nav class="bg-lightbg/95 px-4 fixed w-full z-10">
    <div class="flex justify-between items-center h-14">
      <!-- Left: Logo / Title -->
      <div class="flex items-center gap-2">
        <nuxt-link to="/home">
          <h1 class="select-none text-xl tracking-wide font-bold gradient-text">
            {{ config.sitename }}
          </h1>
        </nuxt-link>
      </div>

      <!-- Right: Hamburger Menu -->
      <button
        class="menu flex justify-center items-center"
        @click="sidebar.toggleSidebar()"
      >
        <Icon name="fa7-solid:list" class="text-xl" />
      </button>
    </div>
  </nav>
</template>

<style scoped>
.gradient-text {
  font-weight: 900;
  background: linear-gradient(90deg, var(--primary), #fff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
