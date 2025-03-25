import type { NuxtConfig } from '@nuxt/schema'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'src/',
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@primevue/nuxt-module',
  ],
  runtimeConfig: {
    public: {
      GQL_HOST: 'http://218.148.0.25:8080/graphiql?path=/graphql' // overwritten by process.env.GQL_HOST
    }
  },
  vue: {
    propsDestructure: true
  },
  primevue: {
    autoImport: true,
    components: {
      include: ['*']
    },
    options: {
      ripple: true
    }
  }
} satisfies NuxtConfig)