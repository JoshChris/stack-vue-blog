<template>
  <footer class="flex w-full bg-blue-stack justify-between items-center">
    <div class="container relative mx-auto py-10">
      <div class="px-10 grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-8">
        <div>
          <h1 class="mb-5"><a href="/"><img src="../assets/stack-logo.png" class="w-32" alt="Stack.com" /></a></h1>
          <ul class="text-gray-400 font-bold font-barlow space-y-3 tracking-wide">
            <li>Powered By: <a href="#" class="text-white hover:underline">Stack Sports</a></li>
            <li><a href="#" class="text-white hover:underline">CaptainU</a></li>
            <li><a href="#" class="text-white hover:underline">GamePlan</a></li>
            <li><a href="#" class="text-white hover:underline">Sports Connect</a></li>
          </ul>
        </div>
        <div class="mt-8 lg:mt-0 ">
          <h3 class="font-barlow text-lg text-white uppercase font-bold mb-5">Subscribe</h3>
          <form class="flex">
            <input type="email" placeholder="Enter your email address" name="email" class="flex-grow h-14 p-4 rounded-l-md font-barlow text-gray-800" />
            <button type="submit" class="bg-red-stack rounded-r-md h-14 p-4 tracking-widest uppercase text-sm font-bold text-white font-barlow transition-all hover:bg-red-500">Subscribe</button>
          </form>
        </div>
        <div class="flex lg:flex-row-reverse">
          <div class="mt-8 lg:mt-0 lg:w-3/5">
            <h3 class="font-barlow text-lg text-white uppercase font-bold mb-5">Follow Stack</h3>
            <ul class="social flex text-white items-center -ml-1.5">
              <li><a href="#" class="p-1.5 md:p-2.5 transform transition-all hover:scale-125 block"><font-awesome-icon :icon="['fab', 'facebook']" /></a></li>
              <li><a href="#" class="p-1.5 md:p-2.5 transform transition-all hover:scale-125 block"><font-awesome-icon :icon="['fab', 'twitter']" /></a></li>
              <li><a href="#" class="p-1.5 md:p-2.5 transform transition-all hover:scale-125 block"><font-awesome-icon :icon="['fab', 'instagram']" /></a></li>
              <li><a href="#" class="p-1.5 md:p-2.5 transform transition-all hover:scale-125 block"><font-awesome-icon :icon="['fab', 'youtube']" /></a></li>
              <li><a href="#" class="p-1.5 md:p-2.5 transform transition-all hover:scale-125 block"><font-awesome-icon :icon="['fab', 'tiktok']" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer class="flex w-full bg-gray-800 justify-between h-14 items-center">
    <div class="px-10 container relative mx-auto font-barlow">
      <p class="text-gray-400">Copyright &copy; 2021 STACK Powered by Stack Sports</p>
    </div>
  </footer>
</template>
