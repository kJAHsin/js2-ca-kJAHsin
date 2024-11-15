import js from '@eslint/js'
import globals from 'globals'

export default [
   {
      rules: {
         ...js.configs.recommended.rules,
      },
      ignores: ['**/node_modules/**', '**/dist/**'],
   },
   {
      files: ['**/*.js'],
      languageOptions: {
         ecmaVersion: 2020,
         globals: globals.browser,
         parserOptions: {
            ecmaVersion: 'latest',
            ecmaFeatures: {},
            sourceType: 'module',
         },
      },
   },
]
