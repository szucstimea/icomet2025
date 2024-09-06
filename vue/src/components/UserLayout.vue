<template>
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
    <template #profile-dropdown>
      <div class="hidden md:block">
        <div class="ml-4 flex items-center md:ml-6">        
        <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="absolute -inset-1.5" />
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt="" />
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem>
                  <a @click="logout" 
                  :class="[
                    'block px-4 py-2 text-sm text-gray-700 cursor-pointer'
                    ]">Sign out</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </template>
  </Navigation>
</template>
  
  <script>
  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  import {useStore} from 'vuex'
  import {computed} from 'vue'
  import {useRouter} from 'vue-router'
  import Navigation from './Navigation.vue'

  const navigation = [
    { name: 'Dashboard', to: {name: 'Dashboard'}},
    { name: 'Surveys', to: {name: 'Surveys'}},
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
      Navigation
    },
    setup(){
      const store = useStore();
      const router = useRouter();

      function logout(){
        store.dispatch("logout")
        .then(() => {
          router.push({
            name: "Login"
          });          
        });
      }

      return{
        user: computed(() => store.state.user.data),
        navigation,
        logout
      };
    }
  }

  </script>