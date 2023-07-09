// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  modules: ['@pinia/nuxt'],
  devtools: { enabled: true },
  runtimeConfig: {
    testToken: process.env.TEST_TOKEN,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
