<template>
   <div class="container mx-auto mt-8 py-8">
    <h1 class="text-3xl text-red-500 mb-12 text-center">UH Men's Soccer Club Roster</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1">
      <div v-for="item in data" :key="item._id" class="col-md-3">
  <div class="thumbnail">
    <div class="caption p-4 flex flex-col">
      <img :src="getImageUrl(item.image1)" class=" object-cover w-52 h-64 ml-10">
      <div class="mt-2 ml-10"> <!-- Add margin-left for shifting to the right -->
        <h3 class="text-lg">{{ item.Name }}</h3>
        <h3 class="text-md">{{ item.Position }}</h3>
        <h3 class="text-md">{{ item.Number }}</h3>
      </div>
    </div>
  </div>
</div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
const apiURL = import.meta.env.VITE_ROOT_API;
export default {
  name: 'roster',
  data() {
    return {
      data: [],
    };
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
