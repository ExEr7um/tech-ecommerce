import svgLoader from "vite-svg-loader"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  appConfig: {
    nuxtIcon: {
      size: "24px",
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-font-loader",
    "nuxt-headlessui",
    "nuxt-icon",
  ],
  tailwindcss: {
    viewer: false,
  },
  vite: {
    plugins: [svgLoader()],
  },
})
