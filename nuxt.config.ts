import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt"],
  typescript: {
    strict: true,
    shim: false,
  },
  runtimeConfig: {
    apiSecret: "",
    public: {
      apiBase: "",
    },
  },
});
