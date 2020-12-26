<template>
    <main class="flex flex-col min-h-screen overflow-hidden">
        <Hero />

        <Features />
        
        <Tech />

        <Blog />
        
    </main>
</template>

<script>
export default {
    head() {
    const title = this.$i18n.t('name')
    const description = this.$i18n.t('dic')
    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description
        },
        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        }
      ]
    }
  },
}
</script>
<style>
.btn {
    @apply font-medium px-8 py-3 shadow-lg inline-flex items-center justify-center border border-transparent rounded leading-snug transition duration-150 ease-in-out text-white
}
</style>

