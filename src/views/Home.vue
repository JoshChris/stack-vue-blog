<template>
  <div class="main container px-10 mx-auto">
    <div class="bg-white w-80 my-16">
        <article v-for="post in latestPosts" :key="`latest-${post.id}`" class="p-4 border-b border-gray-200">
          <router-link :to="`/a/${post.slug}`" class="flex items-center">
            <div class="w-20 h-20 mr-5 flex-shrink-0">
              <img class="w-full" :src="`https://source.unsplash.com/300x300/?youth sports&${post.id}`" alt="sports image" />
            </div>
            <h3 class="text-sm" v-html="post.title.rendered"></h3>
          </router-link>
        </article>
    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue'

const latestPosts = ref([]);

(async () => {
  latestPosts.value = await fetch(`https://www.stack.com/wp-json/wp/v2/posts`).then((a) => a.json());
})()
</script>
