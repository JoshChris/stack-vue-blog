<template>
  <div class="container mx-auto p-16 my-16 bg-white">
    <div v-if="!post.title">Loading..</div>
    <div class="post-item card text-left" v-else>
      <h3 v-html="post.title.rendered"></h3>
      <div v-html="post.content.rendered"></div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref, defineProps} from 'vue'

const props = defineProps({
  slug: { type: String, },
});

const mounted = onMounted(async () => {
  let twitterWidgets = document.createElement('script')
  twitterWidgets.setAttribute('async', 'async')
  twitterWidgets.setAttribute('src', 'https://platform.twitter.com/widgets.js')
  document.head.appendChild(twitterWidgets)
});

const post = ref({});

(async () => {
  const thePost = await fetch(`https://www.stack.com/wp-json/wp/v2/posts/?slug=${props.slug}`).then((a) => a.json())
  post.value = thePost[0];
})()
</script>

<style></style>
