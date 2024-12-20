// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxt/image", "@nuxtjs/i18n"],
  runtimeConfig: {
    public: {
      apiBaseURL: "https://api.cryptoinfo.me/api",
      apiURL1: "https://api.cryptoinfo.me/api/get-crypto-posts?offset=",
      apiURL2: "https://api.cryptoinfo.me/api/get-posts?offset=",
      apiKey: process.env.API_KEY,
    },
    app: {
      head: {
        link: [
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700;800;900&display=swap',
          },
        ],
      },
    },
  },
});
