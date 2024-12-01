import { defineFlatConfig } from 'eslint-define-config';
import { extend } from '@archoleat/eslint-flat-compatibility';
import globals from 'globals';
import importSortPlugin from 'eslint-plugin-simple-import-sort';
import parser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import unicornPlugin from 'eslint-plugin-unicorn';

export default defineFlatConfig([
  ...extend('airbnb-base', 'airbnb-typescript/base'),
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser,
      globals: {
        ...globals.node,
        ...globals.es2015,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        project: 'tsconfig.json',
      },
      sourceType: 'module',
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: 'tsconfig.json',
        },
      },
    },
    plugins: {
      'simple-import-sort': importSortPlugin,
      unicorn: unicornPlugin,
    },
    rules: {
      'import/exports-last': 'error',
      'import/extensions': ['error', { ts: 'always' }],
      'import/group-exports': 'error',
      'import/no-commonjs': 'error',
      'import/no-default-export': 'off',
      'import/no-namespace': 'error',
      'import/no-unassigned-import': 'error',
      'import/prefer-default-export': 'off',
      'simple-import-sort/exports': 'warn',
      'simple-import-sort/imports': 'warn',
      'unicorn/no-unused-properties': 'warn',
    },
  },
  prettierConfig,
]);
