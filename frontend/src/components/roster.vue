<template>
  <div class="container">
    <div class="row">
      <div v-for="item in data" :key="item._id" class="col-md-4">
        <div class="thumbnail">
          <div class="caption">
            <h3>{{ item.Name }}</h3>
            <h3>{{ item.Position }}</h3>
            <h3>{{ item.Number }}</h3>
            <img :src="getImageUrl(item.image1)" class="img-thumbnail">
            <br>
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
name:'roster',
data() {
    return {
      data: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(`${apiURL}/updateroster`);
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
img {
  width: 100px;
  height: 100px;
}
</style>