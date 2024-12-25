// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  image: {
    dir: 'assets/images'
  },
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxt/image", "@nuxtjs/i18n"],
  runtimeConfig: {
    public: {
      apiBaseURL: `${process.env.API_BASE_URL}api`,
      apiBaseURLImg: process.env.API_BASE_URL,
      apiURL1: `${process.env.API_BASE_URL}api/get-crypto-posts?offset=`,
      apiURL2: `${process.env.API_BASE_URL}api/get-posts?offset=`,
      apiKey: process.env.API_KEY,
      coingeckoApiURL: process.env.COINGECKO_API_URL,
    },
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700;800;900&display=swap',
        },
        { rel: 'icon', type: 'image/png', href: '/_nuxt/assets/images/favicon.png' }
      ],
    },
  },

});
