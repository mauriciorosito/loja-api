import js from '@eslint/js';
import globals from 'globals';
import prettierPlugin from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: globals.node
    },
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      'prefer-const': 'error',
      'no-console': 'warn',
      'consistent-return': 'warn',
      'prefer-template': 'warn',
      'prettier/prettier': 'error'
    }
  }
]);
