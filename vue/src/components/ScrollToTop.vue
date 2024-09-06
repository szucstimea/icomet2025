<template>
    <Transition>
        <a href="#" v-if="isVisible" class="fixed bottom-4 right-4 bg-sky-800 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
        </a>
    </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const isVisible = ref(false);

const handleScroll=()=>{
    if (window.scrollY > 200){
        isVisible.value = true
    } else{
        isVisible.value = false
    }
}

onMounted(()=>{
    window.addEventListener("scroll", handleScroll);
})

onUnmounted(()=>{
    window.removeEventListener("scroll", handleScroll);
})
</script>

<style scoped>
.v-enter-active,
.v-leave-active{
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to{
    opacity: 0;
}
</style>