<template>
    <div class="max-w-md bg-white rounded-lg shadow transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 hover:scale-105 transition-slow flex flex-col h-full">
        <a :href="link" target="_blank" :class="imgClass" class="m-auto">
            <img class="rounded-t-lg object-cover" :src="imgSrc" alt="" />
        </a>
        <div class="p-5 flex flex-col flex-grow">
            <a :href="link" target="_blank">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-slate-500 dark:text-white">{{ title }}</h5>
            </a>
            <p class="mb-3 font-normal text-slate-500 dark:text-gray-400">{{ content }}</p>
            <a :href="link" target="_blank" class="mt-auto w-1/3 inline-flex items-center px-3 py-2 font-medium text-center text-white bg-slate-500 rounded-lg hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                More
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
</template>

<script>
export default{
    props: {
        imgSrc: {
            type: String
        },
        title: {
            type: String
        },
        content:{
            type: String
        },
        link: {
            type: String
        },
        imgClass: {
            type: String
        }
    }
}
</script>

<style scoped>
.transition-slow{
    transition: all 500ms ease;
}

</style>