import type { NuxtConfig } from '@nuxt/schema'
import Aura from '@primeuix/themes/aura';
import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'src/',
  css: [
    '~/assets/css/main.css',
    '~/assets/scss/index.scss',
  ],
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
    '@nuxt/test-utils/module',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt'
  ],
  // eslint: {
  //   config: {
  //     standalone: false
  //   }
  // },
  vue: {
    propsDestructure: true
  },
  vite: {
    plugins: [
      // @ts-expect-error - tailwindcss plugin typing issue
      tailwindcss(),
    ],
  },
  primevue: {
    autoImport: true,
    components: {
      include: ['*']
    },
    options: {
      ripple: true,
      theme: {
        preset: Aura
      }
    }
  }
} satisfies NuxtConfig)