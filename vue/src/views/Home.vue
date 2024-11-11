<template>
    <!-- <div id="welcome-letter" class="shadow-lg flex flex-col xl:flex-row lg:flex-row  p-8 text-slate-100 bg-gradient-to-r from-slate-600 to-slate-400"> -->
    <div id="welcome-letter" class="shadow-lg p-8 text-slate-100 relativerounded-lg bg-cover bg-no-repeat w-full bg-center">
      <div class="container flex flex-col xl:flex-row lg:flex-row rounded-lg m-auto">
      <div class="flex flex-col w-full lg:w-1/2 xl:w-1/2 p-5">
        <p class="mb-2 text-lg xl:text-2xl lg:text-2xl font-bold uppercase tracking-tight">Welcome letter</p>
        <p class="text-justify mb-3 text-md xl:text-xl lg:text-xl">The scope of the iCOMET conference is summarized by
          observing that knowledge on interactions between atoms and molecules is vital to our understanding of the
          nanoworld, which includes
          everything from combustion to molecular biology. Such interactions are best deciphered by studying energy
          transfer in dynamical processes.
          This field has developed by studies of energy transfer of small molecules in the gas-phase. Today, we are
          striving toward understanding of
          more complex problems like molecular interactions at surfaces, in the condensed phase, biological molecules and
          technology applications.
          Our goal is to obtain an atomic scale understanding of dynamical events controlling complex physico-chemical
          phenomena. The field is characterized
          by advanced experimental tools and has demonstrated a close connection with highly sophisticated theoretical
          analysis.
          On behalf of the Local Organizing Committee, we cordially invite you to attend the iCOMET conference held in
          Szeged, Hungary from August 31 to September 5 2025.
        </p>
      </div>
      <div class="flex flex-row text-lg lg:flex-col xl:flex-col p-5 m-auto topics">
        <p class="mb-2 text-lg xl:text-2xl lg:text-2xl font-bold uppercase tracking-tight">Topics</p>
          <ul class="arrow xl-text-xl lg:text-xl">
            <li>Advances in Theoretical Chemistry</li>
            <li>Photo-fragmentation Dynamics</li>
            <li>Dynamics at Surfaces</li>
            <li>Cold Collisions and Clusters</li>
            <li>Non-covalent bonding in biological systems</li>
            <li>Ultrafast Dynamics</li>
            <li>Electronically Nonadiabatic Phenomena</li>
            <li>Energy Conversion Processes</li>
            <li>Elementary processes in heterogeneous catalysis</li>
          </ul>
      </div>
    </div>      
    </div>
    <div class="p-8 bg-slate-200 text-slate-500">
      <h5 class="m-7 text-xl xl:text-3xl lg:text-3xl font-bold uppercase tracking-tight text-center text-shadow">More about the 2025 conference</h5>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 lg:gap-2 justify-items-center">
        <div>
          <Card :imgSrc="imageUniversity" link="https://u-szeged.hu/english" title="University of Szeged" content="The University of Szeged is one of Hungary's leading institutions of higher education, known for its rich academic tradition and vibrant research community."></Card>
        </div>
        <div>
          <Card :imgSrc="imageHotel" link="/icomet2025/venue" title="Venue: Novotel Szeged" content="Novotel Szeged offers modern accommodations with scenic views of the Tisza River, ideally located near the city's cultural and historical attractions."></Card>
        </div>
        <div>
          <Card :imgSrc="imageSzeged" link="/icomet2025/venue#szeged" title="Szeged Sun City" content="Szeged is a picturesque city in Southern Hungary, renowned for its rich cultural heritage, historic architecture, and vibrant student life."></Card>
        </div>
        <div>
          <Card :imgSrc="imageCRD" link="https://www2.sci.u-szeged.hu/czako/group.html#about" title="Computational Reaction Dynamics Research Group" content="Our group seek deeper insight into the dynamics and mechanisms of chemical reactions."></Card>
        </div>
      </div>
    </div>

</template>

<script>
import Card from '../components/Card.vue';

export default {
  components: {
    Card
  },
  data() {
    return {
      imageHotel: "/icomet2025/img/cards/Novotel_Szeged_card.jpg",
      imageSzeged: "/icomet2025/img/cards/szeged_card.jpg",
      imageUniversity: "/icomet2025/img/cards/rektori_card.jpg",
      imageCRD: "/icomet2025/img/cards/CRDlogo_card.jpg"
    };
  }
}
</script>

<style scoped>
.bg-shadow {
  background-color: hsla(0, 0%, 0%, 0.3);
}

#welcome-letter{
  background-image: url("/img/szeged_2.jpg");
  text-shadow: 0 2px 5px rgba(0, 0, 0, .9);
  background-attachment: fixed;
  /* background-position: center 60px; */
}

#welcome-letter .container{
  background-color: rgba(0, 0, 0, 0.60);
}

.topics ul{
  margin: 0 0 1.5em 2.5em;
  list-style: none;
}

.topics li > ul{
  margin: 0 0 0 1.5em;
}

.topics li{
  margin: 0 0 0.5em 0;
}

.topics ul li {
  position: relative;
}

.topics .arrow li::before {
  content: "";
  position: absolute;
  left: -1.1em;
  top: 0.35em;
  width: 0;
  height: 0;
  border-top: 0.4em solid transparent;
  border-bottom: 0.4em solid transparent;
  border-left: 0.4em solid #f97316;
}

</style>