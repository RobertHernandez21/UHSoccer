<template>
  <div class="bg-gray-900 text-gray-100 py-3.5 px-6 shawdow md:flex justify-between
  items-center">

  <div class="flex items-center cursor-pointer"> 
    <span class="text-green-500 text-xl mr-l"></span>
    <img src="@/assets/crest.png" alt="Bootstrap" width="32" height="32">
    <h1 class="text-xl">UH Soccer Club</h1>
  </div>

  <span @click="MenuOpen()" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
    <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
  </span>

  <ul class="md:flex md:items-center md:px-0 px-6 md:pb-0 pb-10 md:static absolute bg-gray-900 md:w-auto w-full top-14 duration-700 ease-in"
  :class="[open ? 'left-0' :'left-[-100%]']">
    <li class="md:mx-4 md:my-0 my-6">
        <router-link class="link text-xl hover:text-green-500" :to="{name: 'home'}">Home</router-link> 
    </li>
    <li class="md:mx-4 md:my-0 my-6">
        <router-link class="link text-xl hover:text-green-500" :to="{name: 'games'}">Games</router-link>
    </li>
    <li class="md:mx-4 md:my-0 my-6">
        <router-link class="link text-xl hover:text-green-500" :to="{name: 'roster'}">Roster</router-link> 
    </li>
    <li class="md:mx-4 md:my-0 my-6">
        <router-link class="link text-xl hover:text-green-500" :to="{name: 'events'}">Events</router-link>
    </li>
    <li class="md:mx-4 md:my-0 my-6">
        <router-link class="link text-xl hover:text-green-500" :to="{name: 'contact'}">Contact From</router-link>
    </li>
    <Button> Get Started</Button>
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

