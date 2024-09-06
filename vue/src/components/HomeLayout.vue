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
              this.$route.path === item.to.path ? 'bg-sky-900 text-white' : 'text-gray-300 hover:bg-sky-700 hover:text-white',
              'block px-3 py-2 rounded-md text-base font-medium',
          ]"
          >{{ item.name }}
      </router-link>
    </template>
    <template #dropdown-menu>
      <router-link
        v-for="item in navigation"
        :key="item.name"
        :to="item.to">
        <DisclosureButton class="relative inline-flex items-center justify-center rounded-md bg-sky-800 p-2 text-gray-400 hover:bg-sky-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-800">
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
    { name: 'Speakers', to: {name: 'Speakers'}},
    { name: 'Schedule', to: {name: 'Schedule'}},
    { name: 'Login', to: {name: 'Login'}},
    { name: 'Register', to: {name: 'Register'}},
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