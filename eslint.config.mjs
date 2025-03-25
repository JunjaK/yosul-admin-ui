// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import antfu from '@antfu/eslint-config'

export default withNuxt(
  // antfu({
  //   formatters: true,
  //   vue: true,
  //   typescript: true,
  //   stylistic: {
  //     indent: 2, // 4, or 'tab'
  //     quotes: 'single', // or 'double'
  //   },
  // }, {
  //   rules: {
  //     'style/no-multiple-empty-lines': ['error', { max: 3, maxBOF: 1, maxEOF: 0 }], // 개행 최대 개수 설정
  //     'style/arrow-parens': ['error', 'always'], // arrow function 괄호 사용 설정
  //     'node/prefer-global/process': 'off', // process.env 사용을 위해 off
  //     'eslint-disable-next-line': 'off', // eslint-disable 사용을 위해 off
  //     'ts/no-namespace': 'off',
  //     'ts/no-use-before-define': 'off',
  //     'ts/ban-ts-comment': 'off',
  //     'style/semi': ['error', 'always'], // semi colon 사용
  //     'no-unused-vars': 'warn',
  //     'no-underscore-dangle': 'off',
  //     'no-console': 'warn',
  //     'no-debugger': 'warn',
  //     'quotes': [ // single quotes 사용
  //       'error',
  //       'single',
  //     ],
  //     'ts/consistent-type-definitions': ['off'],
  //     'unused-imports/no-unused-vars': ['warn'],
  //     'vue/component-tags-order': [ // sfc 요소 순서 지정
  //       'error',
  //       {
  //         order: [
  //           'script',
  //           'template',
  //           'style',
  //         ],
  //       },
  //     ],
  //     'vue/first-attribute-linebreak': [ // attribute 줄바꿈 설정
  //       'error',
  //       {
  //         singleline: 'ignore',
  //         multiline: 'beside',
  //       },
  //     ],
  //     'vue/v-on-event-hyphenation': ['error'],
  //     'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
  //     'vue/attributes-order': ['error', { // attribute 순서 지정
  //       order: [
  //         'DEFINITION',
  //         'LIST_RENDERING',
  //         'CONDITIONALS',
  //         'RENDER_MODIFIERS',
  //         'GLOBAL',
  //         ['UNIQUE', 'SLOT'],
  //         'TWO_WAY_BINDING',
  //         'OTHER_DIRECTIVES',
  //         ['ATTR_DYNAMIC', 'ATTR_STATIC', 'ATTR_SHORTHAND_BOOL'],
  //         'EVENTS',
  //         'CONTENT',
  //       ],
  //       // alphabetical: true, // attribute 이름 알파벳 순서로 정렬
  //     }],
  //   },
  // }),
  // Your custom configs here
)
