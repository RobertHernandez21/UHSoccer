<template> 
<swiper
    :slidesPerView="1"
    :spaceBetween="0"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
    >
    <swiper-slide>
  <section class="main swiper mySwiper">
    <div class="wrapper swiper-wrapper">
        <div class="slide swiper-slide">
            <img src="@/assets/img1.jpeg" alt="" class="image">
            <div class="image-date">
                <span class="text">Come Play for us</span>
                <h2>Play with guys <br /> Who have big balls</h2>
                <a href="#" class="button">About us</a>
            </div>
        </div>
    </div>
  </section>
    </swiper-slide>
    <swiper-slide>
  <section class="main swiper mySwiper">
    <div class="wrapper swiper-wrapper">
        <div class="slide swiper-slide">
            <img src="@/assets/img2.jpeg" alt="" class="image">
            <div class="image-date">
                <span class="text">Come Play for us</span>
                <h2>Play with guys <br /> Who have big balls</h2>
                <a href="#" class="button">About us</a>
            </div>
        </div>
    </div>
  </section>
    </swiper-slide>
    <swiper-slide>
  <section class="main swiper mySwiper">
    <div class="wrapper swiper-wrapper">
        <div class="slide swiper-slide">
            <img src="@/assets/img3.jpeg" alt="" class="image">
            <div class="image-date">
                <span class="text">Come Play for us</span>
                <h2>Play with guys <br /> Who have big balls</h2>
                <a href="#" class="button">About us</a>
            </div>
        </div>
    </div>
  </section>
    </swiper-slide>
</swiper>
</template>

<script>
 import { Swiper, SwiperSlide } from 'swiper/vue';
 import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import { Pagination, Navigation } from 'swiper';

export default {
name:'Carousel',
components: {
      Swiper,
      SwiperSlide,
},
setup() {
      return {
        modules: [Pagination, Navigation],
      };
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Ubuntu:ital,wght@0,400;0,500;1,700&display=swap');

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
    ;
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
.swiper-button-prev,
.swiper-button-next {
 height: 50px;
 width: 50px;
 border-radius: 50%;
 background-color: rgba(255, 255, 255, 0.3);
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
 background-color: rgba(255, 255, 255, 0.4);
}

.swiper-button-prev{
left: 50px;
}
.swiper-button-next{
right: 50px;
}
.swiper-button-prev::before,
.swiper-button-next::before,
.swiper-button-prev::after,
.swiper-button-next::after
{
font-size: 25px;
color: #fff;
}
.swiper-pagination-bullet{
    opacity: 1;
    height: 12px;
    width: 12px;
    background-color: #fff;
    visibility: hidden;
}
.swiper-pagination-bullet-active{
    border: 2px solid #fff;
    background-color: #c87e4f;

}
@media screen and (max-width: 768px){
    .swiper-button-prev,
    .swiper-button-next{
        visibility: hidden;
    }
    .swiper-pagination-bullet{
        visibility: visible;
    }
}
</style>