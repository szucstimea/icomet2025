<template>
  <div class="text-white text-shadow-light bg-slate-500">
    <div class="lg:pl-28 md:pl-20 p-10">
      <div class="text-2xl xl:text-4xl lg:text-3xl uppercase">Venue</div>
      <div class="pt-5 text-lg xl:text-2xl lg:text-2xl">The iCOMET 2025 will be held at Novotel Szeged in Hungary. The Hotel is located at the bank of the River Tisza. Google map is shown at the bottom of the page.</div>
    </div>
    <div class="pb-5">
      <Carousel :itemsToShow="3.5" :autoplay="3000" :wrapAround="true" :transition="500" :pauseAutoplayOnHover="true">
        <Slide v-for="(image, index) in images" :key="index">
          <div class="carousel__item">
            <img :src="image" alt="Novotel"></img>
          </div>
        </Slide>
      </Carousel>
    </div>
    <div id="szeged" class="lg:pl-28 md:pl-20 p-10">
      <div class="text-2xl xl:text-4xl lg:text-3xl uppercase">Szeged</div>
      <div class="pt-5 text-lg xl:text-2xl lg:text-2xl">Szeged is the third-largest city in Hungary, located in the southern part of the country near the borders with Serbia and Romania. It sits along the Tisza River and is known for its rich history, beautiful architecture, and vibrant cultural life. The city is home to the University of Szeged, one of the most prestigious universities in Hungary, attracting students from all over the world. Szeged is famous for its annual Open Air Festival, held in front of the stunning Votive Church, which dominates the city's skyline. The city is also known for its culinary heritage, particularly the iconic Szeged fish soup (halászlé), a beloved Hungarian dish. With a mix of historical charm and a lively student population, Szeged offers a blend of tradition and modernity.</div>
    </div>
    <div class="lg:pl-28 md:pl-20 p-10">
      <div class="text-2xl xl:text-4xl lg:text-3xl uppercase">Travel</div>
    </div>
    <div class="p-20">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2758.7033080538577!2d20.154167075805805!3d46.256125680253824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474488139efa7f35%3A0xfceed4d9aeefc2d3!2sNovotel%20Szeged!5e0!3m2!1shu!2shu!4v1729692706260!5m2!1shu!2shu"
      class="w-full min-h-svh" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
  },

  data(){
    return{
      images: [
        "/img/novotel/Novotel_Szeged-001.jpg",
        "/img/novotel/Novotel_Szeged-012.jpg",
        "/img/novotel/Novotel_Szeged-031.jpg",
        "/img/novotel/Novotel_Szeged-034.jpg",
        "/img/novotel/Novotel_Szeged-037.jpg",
        "/img/novotel/Novotel_Szeged-039.jpg",
        "/img/novotel/Novotel_Szeged-082.jpg",
        "/img/novotel/Novotel_Szeged-085.jpg",
        "/img/novotel/Novotel_Szeged-9924.jpg",

      ]
    }
  }
})
</script>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(20deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
