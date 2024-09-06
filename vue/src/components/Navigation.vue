<template>
  <div class="min-h-full">    
      <Disclosure as="nav" class="bg-sky-800" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <div class="flex items-center">
              <div class="mt-10">
                <img class="h-24 w-24" src="\img\iCOMET-Logo.png" alt="Your Company" />
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                    <slot name="menu"></slot>
                </div>
              </div>
            </div>
            <slot name="profile-dropdown"></slot>
            <div class="-mr-2 flex md:hidden">
              <!-- Mobile menu button -->
              <DisclosureButton class="relative inline-flex items-center justify-center rounded-md bg-sky-800 p-2 text-gray-400 hover:bg-sky-700 hover:text-white focus:outline-none  focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>
                <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
          </div>
        </div>  
        <DisclosurePanel class="md:hidden">
          <div class="flex flex-col space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <slot name="dropdown-menu"></slot>
          </div>
        </DisclosurePanel>
      </Disclosure> 
        <div class="dark:bg-dark bg-white py-[10px]">
          <div class="mx-auto px-4 sm:container">
            <div class="border-stroke dark:border-dark-3 border-b">
              <h2 class="text-dark mb-2 text-2xl font-semibold dark:text-white text-center">International Conference on Molecular Energy Transfer in Complex Systems - iCOMET 2025</h2>
              <p class="text-body-color dark:text-dark-6 mb-6 text-base font-medium text-center">
              September 12-17, 2025 Szeged, Hungary
              </p>
            </div>
          </div>
          <router-view></router-view>
        </div>
  </div>
</template>

<script>
  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
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
    }
  }
</script>