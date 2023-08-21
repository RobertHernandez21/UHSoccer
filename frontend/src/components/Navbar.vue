<template>
  <div class="bg-red-600 text-stone-50 py-3.5 px-6 shawdow md:flex justify-between
  items-center relative z-10">

  <div class="flex items-center cursor-pointer"> 
    <span class="text-green-500 text-xl mr-l"></span>
    <img src="@/assets/crest.png" alt="Bootstrap" width="100" height="10">
    
  </div>

  <span @click="MenuOpen()" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
    <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
  </span>

  <ul class="md:flex md:items-center md:px-0 px-6 md:pb-0 pb-10 md:static absolute bg-red-600 md:w-auto w-full block duration-700 ease-in"
  :class="[open ? 'left-0' :'left-[-100%]']">
    <li class="md:mx-4 md:my-0 my-6">
        <router-link @click="MenuOpen()" class="link text-xl hover:underline" :to="{name: 'home'}">Home</router-link> 
    </li>
    <li class="md:mx-4 md:my-0 my-6">
        <router-link @click="MenuOpen()" class="link text-xl hover:underline" :to="{name: 'games'}">Games</router-link>
    </li>
    <li class="md:mx-4 md:my-0 my-6">
        <router-link @click="MenuOpen()" class="link text-xl hover:underline" :to="{name: 'roster'}">Roster</router-link> 
    </li>
    <li class="md:mx-4 md:my-0 my-6">
        <router-link @click="MenuOpen()" class="link text-xl hover:underline" :to="{name: 'events'}">Events</router-link>
    </li>
    <li class="md:mx-4 md:my-0 my-6">
        <router-link @click="MenuOpen()" class="link text-xl hover:underline" :to="{name: 'contact'}">Contact From</router-link>
    </li>
    <li class="md:mx-4 md:my-0 my-6">
        <router-link @click="MenuOpen()" class="link text-xl hover:underline" :to="{name: 'donate'}">Donate</router-link>
    </li>
    <li class="md:mx-4 md:my-0 my-6">
        <router-link @click="MenuOpen()" class="link text-xl hover:underline" :to="{name: 'login'}">Login</router-link>
    </li>
    <Button> 
      <router-link class="link text-xl" :to="{name: 'events'}">Get Started</router-link> 
    </Button>
  </ul>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Button from './button.vue'
export default {
    components:{
        Button
    },
setup() {
 let open = ref(false)   

 function MenuOpen(){
 open.value = !open.value
 }

 return{open,MenuOpen}
}
    
}
</script>
<style>

</style>

