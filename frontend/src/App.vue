<script>
import Navbar from "./components/Navbar.vue"
import Footer from "./components/footer.vue"
export default {
  name:'App',
  components:{
    Navbar,
    Footer,
  },
}
</script>

<template>
  <div class="app">
    
  
    <Navbar />
  

  <router-view></router-view>
  <Footer />
</div>

</template>

<style scoped>

</style>
