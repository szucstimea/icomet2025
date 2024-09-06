<template>
  <div class="m-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  flex flex-col h-full">
        <div class="p-5 flex flex-col flex-grow">
            <a :href="link" target="_blank">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Welcome letter</h5>
            </a>
            <p class="text-justify mb-3 font-normal text-gray-700 dark:text-gray-400">The scope of the iCOMET conference is summarized by
               observing that knowledge on interactions between atoms and molecules is vital to our understanding of the nanoworld, which includes
                everything from combustion to molecular biology. Such interactions are best deciphered by studying energy transfer in dynamical processes.
                 This field has developed by studies of energy transfer of small molecules in the gas-phase. Today, we are striving toward understanding of
                  more complex problems like molecular interactions at surfaces, in the condensed phase, biological molecules and technology applications.
                   Our goal is to obtain an atomic scale understanding of dynamical events controlling complex physico-chemical phenomena. The field is characterized 
                   by advanced experimental tools and has demonstrated a close connection with highly sophisticated theoretical analysis.
              On behalf of the Local Organizing Committee, we cordially invite you to attend the iCOMET conference held in Szeged, Hungary from 15 to 20 September 2025.</p>
        </div>
    </div>
    <div class="p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-6 place-items-center">
        <div class="h-full md:w-full lg:w-full">
          <Card :imgSrc="imageUniversity" link="https://u-szeged.hu/english" title="University of Szeged" content="The University of Szeged is one of Hungary's leading institutions of higher education, known for its rich academic tradition and vibrant research community."></Card>
        </div>
        <div class="h-full md:w-full lg:w-full">
          <Card :imgSrc="imageSzeged" link="https://www.google.com/search?q=Szeged" title="Szeged Sun City" content="Szeged is a picturesque city in Southern Hungary, renowned for its rich cultural heritage, historic architecture, and vibrant student life."></Card>
        </div>
        <div class="h-full md:w-full lg:w-full">
          <Card :imgSrc="imageHotel" link="https://novotel.hotelszeged.com/en/" title="Accomodation: Novotel" content="Novotel Hotel Szeged offers modern accommodations with scenic views of the Tisza River, ideally located near the city's cultural and historical attractions."></Card>
        </div>
    </div>
</template>

<script>
import PageComponent from '../components/PageComponent.vue';
import Card from '../components/Card.vue';

export default{
  components:{
    PageComponent,
    Card
  },
  data(){
    return{
      imageHotel: "/img/novotel.jpg",
      imageSzeged: "/img/dom.jpg",
      imageUniversity: "/img/rektori.jpg"
    };
  }
}
</script>

<style scoped>
  .text-shadow{
    text-shadow: 1px 1px 1px black;
  }

  .bg-shadow{
    background-color: hsla(0, 0%, 0%, 0.3);
  }

  .bg-home-uni{
    aspect-ratio: 14/9;
  }

</style>