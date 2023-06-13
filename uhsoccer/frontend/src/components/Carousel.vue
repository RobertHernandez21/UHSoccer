<template> 
  <section class="main">
    <div class="wrapper">
        <div class="slide">
            <img src="@/assets/img1.jpeg" alt="" class="image">
            <div class="image-date">
                <span class="text">Come Play for us</span>
                <h2>Play with guys <br /> Who have big balls</h2>
                <a href="#" class="button">About us</a>
            </div>
        </div>
    </div>
  </section>
</template>

<script>

export default {
name:'Carousel',
mounted() {
    const recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"
    );
    document.head.appendChild(recaptchaScript);
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Ubuntu:ital,wght@0,400;0,500;1,700&display=swap');
@import url('https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
  .main{
    height: 100vh;
    width: 100%;
    
  }
  .wrapper, .slide{
    overflow: hidden; 
    width: 100%;
    height: 100%;
  }
  .slide{
    overflow:hidden;
  }
  .slide::before{
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0,0.4);
    z-index: 10;
  }
  .slide .image{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .slide .image-date{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
    z-index: 100;
  }
  .image-date span.text{
    font-size: 14px;
    font-weight: 400;
    color: #fff;
  }
  .image-date h2{
    font-size: 45px;
    font-weight: 600;
    color: #fff;
  }
  a.button{
    display: inline-block;
    padding: 10px 20px;
    border-radius: 25px;
    color: #333;
    background-color: #fff;
    text-decoration: none;
    margin-top: 25px;
    transition:all 0.3s ease
  }
  a.button:hover{
    color: #fff;
    background-color: #c87e4f;
  }
</style>