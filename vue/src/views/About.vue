<template>
    <div class="m-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  flex flex-col h-full">
        <div class="p-5 flex flex-col flex-grow">
            <a :href="link" target="_blank">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Vision of the COMET conference</h5>
            </a>
            <p class="text-justify mb-3 font-normal text-gray-700 dark:text-gray-400">First established in 1971 in Cambridge, UK, the scope
               of the iCOMET meetings is to discuss the recent progress in our understanding of the interactions and energy transfer that are 
               central to various chemical and physical processes. While the initial studies focused on the energy transfer in small molecules 
               in the gas-phase, the field has now grown investigating complex processes that happen in the condensed phase, at interfaces in 
               heterogeneous environments, and biological systems.
              The conference brings together scientists from all over the world to discuss the state-of-the-art experimental and theoretical 
              studies of the key dynamical events in molecular systems.</p>
        </div>
    </div>
      <div class="px-20">
        <h5 class="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">History</h5>
        <Timeline></Timeline>
      </div>
</template>

<script setup>
import Timeline from '../components/Timeline.vue';
</script>