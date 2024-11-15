import js from '@eslint/js'
import globals from 'globals'
import stylelint from 'eslint-plugin-stylelint'

export default [
   {
      rules: {
         ...js.configs.recommended.rules,
      },
      ignores: [
         '**/node_modules/**',
         '**/dist/**',
         '**/*test*.js',
         '**/*config*.js',
         '**/*.css',
      ],
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
   {
      files: ['**/*.css', '**/*.scss'],
      plugins: {
         stylelint,
      },
      rules: {
         'stylelint/no-undef-class': 'error',
      },
   },
]
