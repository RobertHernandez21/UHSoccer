<template>
   <div class="container mx-auto mt-12">
    <h1
        class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10 mb-12"
      >
       Club Roster
      </h1>
      <div class="text-center mt-8 mb-4">
        <router-link :to="{ name: 'createroster' }">
        <button  v-if=authStore.isAuth class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        Update Roster
        </button>
        </router-link>
      </div>
    <div class="grid grid-cols-4 gap-8">
      <div v-for="item in data" :key="item._id">
        <div class="thumbnail">
          <div class="caption text-center">
            <img :src="getImageUrl(item.image1)" class="w-full h-auto object-cover rounded-lg">
            <h3 class="mt-2 text-xl">{{ item.Name }}</h3>
            <p class="text-gray-500">{{ item.Position }}</p>
            <p class="text-gray-500">{{ item.Number }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
const apiURL = import.meta.env.VITE_ROOT_API;
import { useAuthStore } from "@/store/auth"
export default {
  name: 'roster',
  data() {
    return {
      data: [],
    };
  },
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(`${apiURL}/createroster`);
        this.data = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    getImageUrl(imageFilename) {
      return `${apiURL}/uploads/${imageFilename}`;
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
/* You can optionally add some scoped styles here */
</style>
