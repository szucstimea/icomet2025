<template>
  <div class="min-h-full bg-slate-200 text-slate-500">    
      <Disclosure as="nav" v-slot="{ open }">
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
              <DisclosureButton class="relative inline-flex items-center justify-center rounded-md  p-2 hover:bg-slate-700 hover:text-white focus:outline-none  focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>
                <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
          </div>
        </div>  
        <DisclosurePanel class="md:hidden">
          <div class="flex flex-col space-y-1 px-2 pb-3 pt-2 mt-12 sm:px-3">
            <slot name="dropdown-menu"></slot>
          </div>
        </DisclosurePanel>
      </Disclosure> 
        <div class="dark:bg-dark py-[10px] text-shadow">
          <div class="mx-auto p-4 sm:container">
            <div class="border-stroke dark:border-dark-3 border-b">
              <p class="m-2 text-lg xl:text-3xl lg:text-2xl font-semibold text-center">International Conference on Molecular Energy Transfer in Complex Systems - iCOMET 2025</p>
              <p class="mb-4 text-lg xl:text-2xl lg:text-2xl text-center lg:">
              August 31 - September 5, 2025 Szeged, Hungary
              </p>
            </div>
          </div>
        </div>
      </div>
      <router-view></router-view>
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

<style>

.text-shadow {
  text-shadow: 0.5px 0.5px 0.5px black;
}

.text-shadow-light{
  text-shadow: 0.5px 0.5px 0.5px gray;
}

</style>