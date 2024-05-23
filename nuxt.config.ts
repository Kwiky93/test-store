// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },

  app: {
    baseURL: "/test-store/",
    pageTransition: { name: "page", mode: "out-in" },
  },

  modules: ["vuetify-nuxt-module", "nuxt-mdi"],
});
