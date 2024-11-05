<template>
  <div class="shadow-lg p-8 bg-slate-600 text-shadow">
    <p class="mb-4 p-4 text-center text-lg xl:text-2xl lg:text-2xl font-bold uppercase text-slate-100">International Advisory Committee</p>
    <div class="flex flex-row">
      <div class="flex flex-col committees mx-auto">
        <table class="xl:text-xl lg:text-xl text-orange-400">
          <tr><td class="arrow">Aart W. Kleyn, Secretary General</td><td class="text-slate-100 pl-3">Leiden Institute of Chemistry, The Netherlands</td></tr>
          <tr><td class="arrow">Rainer D. Beck</td><td class="text-slate-100 pl-3">Ecole polytechnique federale de Lausanne</td></tr>
          <tr><td class="arrow">Astrid Bergeat</td><td class="text-slate-100 pl-3">University of Bordeaux</td></tr>
          <tr><td class="arrow">Piergiorgio Casavecchia</td><td class="text-slate-100 pl-3">University of Perugia</td></tr>
          <tr><td class="arrow">Shuiming Hu</td><td class="text-slate-100 pl-3">University of Science and Technology of China</td></tr>
          <tr><td class="arrow">Sang Kyu Kim</td><td class="text-slate-100 pl-3">Korea Advanced Institute of Science and Technology</td></tr>
          <tr><td class="arrow">Upakarasamy Lourderaj</td><td class="text-slate-100 pl-3">National Institute of Science Education and Research</td></tr>
          <tr><td class="arrow">Alec M. Wodtke</td><td class="text-slate-100 pl-3">Max Planck Institue for Biophysikal Chemistry</td></tr>
          <tr><td class="arrow">Sebastiaan Y. T. van de Meerakker</td><td class="text-slate-100 pl-3">Radboud University Nijmegen</td></tr>
          <tr><td class="arrow">Andrew Orr-Ewing</td><td class="text-slate-100 pl-3">University of Bristol</td></tr>
          <tr><td class="arrow">Hongmei Su</td><td class="text-slate-100 pl-3">Beijing Normal University</td></tr>
          <tr><td class="arrow">Toshinori Suzuki</td><td class="text-slate-100 pl-3">Kyoto University</td></tr>
          <tr><td class="arrow">Jurgen Troe</td><td class="text-slate-100 pl-3">University of Gottingen</td></tr>
          <tr><td class="arrow">Claire Vallance</td><td class="text-slate-100 pl-3">University of Oxford</td></tr>
          <tr><td class="arrow">Chia C. Wang</td><td class="text-slate-100 pl-3">National Sun Yat-sen University</td></tr>
          <tr><td class="arrow">Xingan Wang</td><td class="text-slate-100 pl-3">University of Science and Technology of China</td></tr>
          <tr><td class="arrow">Roland Wester</td><td class="text-slate-100 pl-3">University of Innsbruck</td></tr>
          <tr><td class="arrow">Xueming Yang</td><td class="text-slate-100 pl-3">Dalian Institute of Chemical Physics, Chinese Academy of Sciences</td></tr>
          <tr><td class="arrow">Donghui Zhang</td><td class="text-slate-100 pl-3">Dalian Institute of Chemical Physics, Chinese Academy of Sciences</td></tr>
        </table>
      </div>
    </div>

    <p class="mb-4 p-4 text-center text-lg xl:text-2xl lg:text-2xl font-bold uppercase tracking-tight text-slate-100">Local Organising Committee</p>
    <div class="flex flex-row">
      <div class="flex flex-col committees mx-auto">
        <table class="xl:text-xl lg:text-xl text-orange-400">
          <tr><td class="arrow">Gábor Czakó</td><td class="text-slate-100 pl-3">University of Szeged</td></tr>
          <tr><td class="arrow">Dóra Papp</td><td class="text-slate-100 pl-3">University of Szeged</td></tr>
        </table>
      </div>
    </div>
  </div>

</template>

<script setup>
</script>

<style scoped>
.committees table{
  margin: 0 0 1.5em 2.5em;
  list-style: none;
}

.committees td{
  margin: 0 0 0 1.5em;
}

.committees td{
  position: relative;
}

.arrow::before {
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