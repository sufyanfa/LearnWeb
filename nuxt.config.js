export default {
  target: 'static',
  ssr: true,
  head: {
    title: "تعلم الويب",
    htmlAttrs: {
      dir: "rtl"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "og:site_name", property: "og:site_name", content: "NuxtJS" },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "twitter:site", name: "twitter:site", content: "@nuxt_js" },
      { hid: "twitter:card", name: "twitter:card", content: "summary_large_image"},
      { hid: "og:image", property: "og:image", content: "https://nuxtjs.org/nuxt-card.png"},
      { hid: "og:image:secure_url", property: "og:image:secure_url", content: "https://nuxtjs.org/nuxt-card.png"},
      { hid: "og:image:alt", property: "og:image:alt", content: "NuxtJS" },
      { hid: "twitter:image", name: "twitter:image", content: "https://nuxtjs.org/nuxt-card.png"}
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/logo.svg" },
      { rel: "stylesheet", href: "https://use.typekit.net/ejq6sey.css" }
    ]
  },

  loading: { color: '#41B883' },

  css: [
    '~/assets/css/fonts.css'
  ],

  plugins: [
    "~/plugins/dir.js",
  ],

  components: true,

  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],

  modules: ['nuxt-i18n','@nuxt/content'],

  build: {},
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    config: {},
    viewer: true
  },
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storageKey: "nuxt-color-mode"
  },
  i18n: {
    locales: [
      { code: "ar", iso: "ar", file: "ar.js", name: "عربي", dir: "rtl" },
      { code: "en", iso: "en-US", file: "en.js", name: "English", dir: "ltr" },
      { code: "es", iso: "es-AR", file: "es.js", name: "Freance", dir: "ltr" }
    ],
    seo: true,
    loadLanguagesAsync: true,
    vueI18nLoader: true,
    lazy: true,
    langDir: "lang/",
    defaultLocale: "ar",
    vueI18n: {
      fallbackLocale: "ar"
    }
  },
  content: {
    liveEdit: false
  }
};
