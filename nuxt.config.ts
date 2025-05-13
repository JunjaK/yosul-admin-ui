import type { NuxtConfig, NuxtPage } from '@nuxt/schema';
import tailwindcss from '@tailwindcss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-04-01',
  devtools: { enabled: true },
  devServer: {
    port: 4000,
  },
  srcDir: 'src/',
  build: {
    transpile: process.env.NODE_ENV === 'production' ? ['naive-ui', 'vueuc', '@css-render/vue3-ssr', '@juggle/resize-observer', 'date-fns', '@css-render/plugin-bem'] : ['@juggle/resize-observer'],
  },
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
  modules: ['@nuxt/eslint',
    '@nuxt/image', '@nuxt/test-utils', '@nuxt/fonts', '@nuxt/icon', '@nuxt/test-utils/module', '@vueuse/nuxt', '@vueuse/motion/nuxt', '@bg-dev/nuxt-naiveui'],
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: true,
        quotes: 'single',
      },
    },
  },
  vue: {
    propsDestructure: true,
  },
  vite: {
    plugins: [
      tailwindcss(),
      AutoImport({
        imports: [
          {
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar',
            ],
          },
        ],
      }),
      Components({
        dts: true,
        resolvers: [NaiveUiResolver()],
      }),
    ],
  },
  hooks: {
    'pages:extend'(pages) {
      // remove routes
      function removePagesMatching(pattern: RegExp, pages: NuxtPage[] = []) {
        const pagesToRemove: NuxtPage[] = [];
        for (const page of pages) {
          if (page.file && pattern.test(page.file)) {
            pagesToRemove.push(page);
          }
          else {
            removePagesMatching(pattern, page.children);
          }
        }
        for (const page of pagesToRemove) {
          pages.splice(pages.indexOf(page), 1);
        }
      }
      removePagesMatching(/\.{ts,tsx,js,jsx}$/, pages);
      removePagesMatching(/_subs/, pages);
    },
  },
} satisfies NuxtConfig);
