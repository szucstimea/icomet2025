<template>
  <ScrollToTop></ScrollToTop>
  <Navigation>
    <template #menu>
      <router-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.to"
          :exact="item.to.path === '/'"
          :class="[
              this.$route.name === item.to.name ? 'bg-slate-500 text-white' : 'text-slate-500 hover:bg-slate-500 hover:text-white',
              'block px-3 py-2 rounded-md xl:text-xl'
          ]"
          >{{ item.name }}
      </router-link>
    </template>
    <template #dropdown-menu>
      <router-link
        v-for="item in navigation"
        :key="item.name"
        :to="item.to">
        <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-slate-600 shadow hover:bg-slate-500 hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-800">
          {{ item.name }}
        </DisclosureButton>
        </router-link>
    </template> 
  </Navigation>
</template>
  
  <script>
  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  import Navigation from './Navigation.vue';
  import ScrollToTop from './ScrollToTop.vue';



  const navigation = [
    { name: 'Home', to: {name: 'Home'}},
    { name: 'About', to: {name: 'About'}},
    { name: 'Committees', to: {name: 'Committees'}},
    { name: 'Venue', to: {name: 'Venue'}},
    { name: 'Speakers', to: {name: 'Speakers'}},
    { name: 'Schedule', to: {name: 'Schedule'}},
    // { name: 'Login', to: {name: 'Login'}},
    // { name: 'Register', to: {name: 'Register'}},
  ]

  export default {
    components: {
      Disclosure,
      DisclosureButton,
      DisclosurePanel,
      Menu,
      MenuButton,
      MenuItem,
      MenuItems,
      Notification,
      Bars3Icon,
      XMarkIcon,
      Navigation,
      ScrollToTop
    },
    setup(){
      return{
        navigation
      };
    }
  }

  </script>