// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-og-image"],
  ogImage: {
    siteUrl: process.env.BASE_URL || "http://localhost:3000",
  },
});
