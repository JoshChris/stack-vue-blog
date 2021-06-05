<template>
  <header class="flex w-full bg-blue-stack justify-between h-16 items-center fixed top-0">
    <h1 class="pl-5 ml-16"><router-link to="/"><img src="../assets/stack-logo.png" class="w-32" alt="Stack.com" /></router-link></h1>
    <button type="button" @click="openNav()" class="meatstack order-first bg-red-stack w-16 h-16 absolute left-0 text-white text-2xl">
      <font-awesome-icon v-if="!isNavOpen" icon="bars" />
      <font-awesome-icon v-if="isNavOpen" icon="times" />
    </button>
    <nav :class="{ '-left-80': !isNavOpen }" class="transition-left duration-300 offscreen block fixed w-80 z-50 bg-gray-700 top-16 left-0 h-screen text-lg font-barlow text-white flex">
      <ul class="categories uppercase divide-y divide-gray-600 w-full">
        <li><router-link to="/" class="p-3 block">Home</router-link></li>
        <li><a href="#" class="p-3 block">Sports News</a></li>
        <li><a href="#" class="p-3 block">Sports Skills</a></li>
        <li><a href="#" class="p-3 block">College Recruiting</a></li>
        <li><a href="#" class="p-3 block">Nutrition</a></li>
      </ul>
      <ul class="social order-first w-16 bg-gray-600 divide-y divide-gray-700 text-lg border-r border-gray-700 text-center flex-shrink-0">
        <li><a href="#" class="py-3 inline-block"><font-awesome-icon :icon="['fab', 'facebook']" /></a></li>
        <li><a href="#" class="py-3 inline-block"><font-awesome-icon :icon="['fab', 'twitter']" /></a></li>
        <li><a href="#" class="py-3 inline-block"><font-awesome-icon :icon="['fab', 'instagram']" /></a></li>
        <li><a href="#" class="py-3 inline-block"><font-awesome-icon :icon="['fab', 'youtube']" /></a></li>
        <li><a href="#" class="py-3 inline-block"><font-awesome-icon :icon="['fab', 'tiktok']" /></a></li>
      </ul>
    </nav>
    <aside class="absolute right-0 pr-5 md:pr-10">
      <nav class="header flex font-barlow text-white">
        <ul class="categories hidden lg:flex uppercase items-center">
          <li><a href="#" class="px-4 inline-block flex items-center transition-all hover:bg-blue-500 h-16">Sports News</a></li>
          <li><a href="#" class="px-4 inline-block flex items-center transition-all hover:bg-blue-500 h-16">Sports Skills</a></li>
          <li><a href="#" class="px-4 inline-block flex items-center transition-all hover:bg-blue-500 h-16">College Recruiting</a></li>
          <li><a href="#" class="px-4 inline-block flex items-center transition-all hover:bg-blue-500 h-16">Nutrition</a></li>
          <li class="hidden xl:flex items-center ml-7 relative">
            <input :class="{ 'w-52 p-4 pr-12': isSearchOpen }" v-model='searchKeywords' class="h-12 w-0 overflow-hidden transition-all duration-300 border-none text-gray-800" name="keywords" type="text" placeholder="Enter keywords" />
            <button type="button" @click="clearSearch()" :class="{ 'hidden': !searchKeywords.length }" class="text-sm absolute right-14 p-2 text-gray-700"><font-awesome-icon icon="times" /></button>
            <a href="#" @click="openOrDoSearch()" class="px-4 inline-block flex items-center transition-all hover:bg-blue-500 h-12"><font-awesome-icon icon="search" /></a>
          </li>
        </ul>
        <ul class="social flex ml-8 items-center">
          <li><a href="#" class="p-1.5 md:p-2.5 transform transition-all hover:scale-125 block"><font-awesome-icon :icon="['fab', 'facebook']" /></a></li>
          <li><a href="#" class="p-1.5 md:p-2.5 transform transition-all hover:scale-125 block"><font-awesome-icon :icon="['fab', 'twitter']" /></a></li>
          <li><a href="#" class="p-1.5 md:p-2.5 transform transition-all hover:scale-125 block"><font-awesome-icon :icon="['fab', 'instagram']" /></a></li>
          <li><a href="#" class="p-1.5 md:p-2.5 transform transition-all hover:scale-125 block"><font-awesome-icon :icon="['fab', 'youtube']" /></a></li>
          <li><a href="#" class="p-1.5 md:p-2.5 transform transition-all hover:scale-125 block"><font-awesome-icon :icon="['fab', 'tiktok']" /></a></li>
        </ul>
      </nav>
    </aside>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'

const navOpen = ref(false)
const isNavOpen = computed(() => navOpen.value)
const openNav = () => { navOpen.value = !navOpen.value }

const searchOpen = ref(false);
const searchKeywords = ref('');
const isSearchOpen = computed(() => searchOpen.value)
const openOrDoSearch = () => {
  if (searchKeywords.value) {
    alert(`searching for ${searchKeywords.value}`)
  } else {
    searchOpen.value = !searchOpen.value
  }
}
const clearSearch = () => {
  searchKeywords.value = '';
}
</script>
