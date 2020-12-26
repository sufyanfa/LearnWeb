<template>
  <main class="antialiased bg-white text-gray-900 tracking-tight dark:bg-gray-900">
    <NavBar />
    <ColorMode />
    <Lang />
    <Nuxt />
    <Footer />
  </main>
</template>
<script>
export default {
computed: {
  availableLocales () {
    return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
  }
}
}

</script>
<style>
html { 
  font-family: ibm-plex-arabic;
}
</style>
