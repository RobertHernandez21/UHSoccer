<template>
   
  <div class="container mx-auto mt-12">
    <h2 class="text-2xl mb-4">Add Data</h2>

    <form @submit.prevent="uploadData" enctype="multipart/form-data">
      <div class="mb-4">
        <label for="title" class="block font-medium mb-1">Name</label>
        <input v-model="title" type="text" name="title" placeholder="Name" class="form-input" required>
      </div>
      <div class="mb-4">
        <label for="position" class="block font-medium mb-1">Position</label>
        <input v-model="position" type="text" name="position" placeholder="Position" class="form-input" required>
      </div>
      <div class="mb-4">
        <label for="number" class="block font-medium mb-1">Number</label>
        <input v-model="number" type="number" name="number" placeholder="Number" class="form-input" required>
      </div>
      <div class="mb-4">
        <label class="block font-medium mb-1">Image</label>
        <input type="file" ref="upl" accept="image/*" required>
      </div>
      <button type="submit" class="btn btn-green">Upload</button>
    </form>

    <div class="mt-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="item in data" :key="item._id" class="col-md-3">
          <div class="thumbnail">
            <div class="caption">
              <h3 class="text-xl">{{ item.Name }}</h3>
              <h3 class="text-md">{{ item.Position }}</h3>
              <h3 class="text-md">{{ item.Number }}</h3>
              <img :src="'http://localhost:3001/uploads/' + item.image1" class="img-thumbnail">
              <br>
              <button @click="deleteItem(item._id)" class="mt-2 btn btn-red">Delete</button>
            </div>
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
        position: '', // Add this line
        number: '',   // Add this line
        data: [],
      };
    },
    methods: {
      async uploadData() {
        const formData = new FormData();
        formData.append('title', this.title);
        formData.append('position', this.position); // Add this line
        formData.append('number', this.number);     // Add this line
        formData.append('upl', this.$refs.upl.files[0]);
  
        try {
          await axios.post(`${apiURL}/createroster`, formData);
          this.fetchData();
        } catch (error) {
          console.error('Error uploading data:', error);
        }
      },
      async fetchData() {
        try {
          const response = await axios.get(`${apiURL}/createroster`);
          console.log('Fetched data:', response.data); // Add this line
          this.data = response.data;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
      async deleteItem(itemId) {
        try {
          await axios.post(`${apiURL}/deleteroster`, { prodId: itemId });
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
  .btn-green {
  background-color: #48bb78; /* Set your desired green color */
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-green:hover {
  background-color: #38a169; /* Darker shade on hover */
}

.btn-red {
  background-color: #e53e3e; /* Set your desired red color */
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-red:hover {
  background-color: #c53030; /* Darker shade on hover */
}
  </style>
  