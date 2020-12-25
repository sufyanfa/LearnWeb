<template>
  <div class="fixed bottom-0 left-0 mb-4 ml-4 md:ml-30 z-50">
    <button
      class="relative overflow-hidden px-4 flex items-center text-white bg-gray-800 dark:bg-gray-100 dark:text-gray-800 rounded-full h-10 outline-none focus:outline-none transition-colors duration-300 ease-linear"
    >
      <nuxt-link
        v-if="$i18n.locale !== 'ar'"
        :to="switchLocalePath('ar')"
        rel="noopener"
      >
        ع
      </nuxt-link>

      <nuxt-link
        v-if="$i18n.locale !== 'en'"
        :to="switchLocalePath('en')"
        rel="noopener"
      >
        en
      </nuxt-link>
    </button>
  </div>
</template>