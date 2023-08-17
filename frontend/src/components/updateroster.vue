<template>
    <div class="container">
      <div class="row">
        <h2>Add Data</h2>
  
        <form @submit.prevent="uploadData" enctype="multipart/form-data">
          <div class="form-group row">
            <div class="col-md-1">
              <label for="title" class="col-sm-2 col-form-label">Title</label>
            </div>
            <div class="col-sm-3">
              <input v-model="title" type="text" name="title" placeholder="title" class="form-control" required>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-2">
              <input type="file" ref="upl" class="form-control-file" accept="image/*" required>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-2">
              <input type="file" ref="upl1" class="form-control-file" accept="image/*" required>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-2">
              <button type="submit" class="btn btn-primary">Upload</button>
            </div>
          </div>
        </form>
      </div>
      <div class="row">
        <div v-for="item in data" :key="item._id" class="col-md-4">
          <div class="thumbnail">
            <div class="caption">
              <h3>{{ item.Name }}</h3>
              <img :src=" 'http://localhost:3001/uploads/' + item.image1" class="img-thumbnail">
              <br>
              <button @click="deleteItem(item._id)" class="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  const apiURL = import.meta.env.VITE_ROOT_API
  export default {
    data() {
      return {
        title: '',
        data: [],
      };
    },
    methods: {
      async uploadData() {
        const formData = new FormData();
        formData.append('title', this.title);
        formData.append('upl', this.$refs.upl.files[0]);
        formData.append('upl1', this.$refs.upl1.files[0]);
  
        try {
          await axios.post(`${apiURL}/updateroster`, formData);
          this.fetchData();
        } catch (error) {
          console.error('Error uploading data:', error);
        }
      },
      async fetchData() {
        try {
          const response = await axios.get(`${apiURL}/updateroster`);
          console.log('Fetched data:', response.data); // Add this line
          this.data = response.data;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
      async deleteItem(itemId) {
        try {
          await axios.post('/delete', { prodId: itemId });
          this.fetchData();
        } catch (error) {
          console.error('Error deleting item:', error);
        }
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
  