import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'https://api.yosul.site/graphql',
  documents: ['src/graphql/api.graphql'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/graphql/apis/': {
      preset: 'client',
      config: {
        useTypeImports: true
      }
    }
  }
}

export default config