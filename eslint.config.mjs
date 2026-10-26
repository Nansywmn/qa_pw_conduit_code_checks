
import js from '@eslint/js';
import globals from 'globals';
import playwright from 'eslint-plugin-playwright';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  globalIgnores([
    '**/node_modules/',
    '**/playwright.config.js',
    '**/playwright-report/',
  ]),
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.node },
    rules: {
      'no-unused-vars': 'error',
      'max-len': ['error', { code: 80, comments: 80 }],
    },
  },
  {
    files: ['**/tests/**/*.{js,mjs,cjs}'],
    extends: [playwright.configs['flat/recommended']],
    rules: {
      'playwright/expect-expect': 'off',
    },
  },
  eslintConfigPrettier,
]);
