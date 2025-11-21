// eslint.config.cjs — Config para ESLint v9 + TypeScript + Prettier (CommonJS)

const tseslint = require('@typescript-eslint/eslint-plugin');
const tsparser = require('@typescript-eslint/parser');
const prettier = require('eslint-config-prettier');

module.exports = [
  {
    files: ['src/**/*.{ts,tsx}'],

    languageOptions: {
      parser: tsparser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    plugins: {
      '@typescript-eslint': tseslint,
    },

    rules: {
      ...tseslint.configs.recommended.rules,
      ...prettier.rules,
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_', // ignora parámetros que empiezan con _
          varsIgnorePattern: '^_', // ignora variables que empiezan con _
          caughtErrorsIgnorePattern: '^_', // ignora errores capturados llamados _error, etc.
        },
      ],
    },
  },
];
