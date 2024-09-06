<template>
      <!-- Item #1 -->
    <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        <!-- Icon -->
        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-sky-800 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            {{ year }}
        </div>
        <!-- Card -->
        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div class="flex justify-between space-x-2 mb-1">
                <div class="font-bold text-slate-900">{{ place }}</div>
            </div>
            <div class="text-slate-500">Organizer: {{ organizer }}</div>
        </div>
    </div>
</template>

<script>
export default{
    props: {
        year: {
            type: String
        },
        place: {
            type:String
        },
        organizer: {
            type: String
        }
    }
}
</script>