<template>
    <div class="text-shadow p-5 bg-slate-200 text-slate-100">
        <div class="p-5 flex flex-col flex-grow bg-slate-500 border rounded-lg shadow-lg h-full">
            <a :href="link" target="_blank">
                <h5 class="mb-2 text-lg xl:text-2xl lg:text-2xl font-bold tracking-tight">Vision of the COMET conference</h5>
            </a>
            <p class="text-justify mb-3 text-md xl:text-xl lg:text-xl">First established in 1971 in Cambridge, UK, the scope
               of the iCOMET meetings is to discuss the recent progress in our understanding of the interactions and energy transfer that are 
               central to various chemical and physical processes. While the initial studies focused on the energy transfer in small molecules 
               in the gas-phase, the field has now grown investigating complex processes that happen in the condensed phase, at interfaces in 
               heterogeneous environments, and biological systems.
              The conference brings together scientists from all over the world to discuss the state-of-the-art experimental and theoretical 
              studies of the key dynamical events in molecular systems.</p>
        </div>
    </div>
      <div class="px-20 bg-slate-200 pb-10">
        <h5 class="text-center mb-2 text-2xl font-bold tracking-tight text-slate-700 dark:text-white">History</h5>
        <Timeline></Timeline>
      </div>
</template>

<script setup>
import Timeline from '../components/Timeline.vue';
</script>