<template>
      <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="\img\iCOMET-Logo.png" alt="Your Company" />
      </div>  
      <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "AuthLayout"
}
</script>