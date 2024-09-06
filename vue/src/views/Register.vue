<template>  
    <h2 class="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up here</h2>
    <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit="register">
        <div>
          <label for="fullname" class="block text-sm font-medium leading-6 text-gray-900">Full name</label>
          <div class="mt-2">
            <input id="fullname" name="name" type="text" autocomplete="name" required="" v-model="user.name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6" />
          </div>
        </div><div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" required="" v-model="user.email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          <div class="mt-2">
            <input id="password" name="password" type="password" autocomplete="current-password" required="" v-model="user.password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password_confirmation" class="block text-sm font-medium leading-6 text-gray-900">Password Confirmation</label>
          </div>
          <div class="mt-2">
            <input id="password_confirmation" name="password_confirmation" type="password" autocomplete="current-password_confirmation" required="" v-model="user.password_confirmation" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">Sign up</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Already have an account?
        {{ ' ' }}
        <router-link :to="{name: 'Login'}" class="font-semibold leading-6 text-sky-600 hover:text-sky-500">Login to your account</router-link>
      </p>
    </div>
</template>

<script setup>
import store from "../store";
import { useRouter } from "vue-router";

const router = useRouter();

const user = {
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
};

function register(ev){
  ev.preventDefault();
  store.dispatch('register', user)
  .then((res)=>{
    router.push({
      name: 'Dashboard'
    })
  })
}

</script>
  