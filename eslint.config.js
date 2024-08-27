import { defineFlatConfig } from 'eslint-define-config';
import { extend } from '@archoleat/eslint-flat-compatibility';

import globals from 'globals';

import prettierConfig from 'eslint-config-prettier';
import unicornPlugin from 'eslint-plugin-unicorn';

import parser from '@typescript-eslint/parser';

export default defineFlatConfig([
  ...extend(
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ),
  unicornPlugin.configs['flat/recommended'],
  {
    languageOptions: {
      parser,
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
      },
      parserOptions: {
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
    rules: {
      'import/exports-last': 'error',
      'import/extensions': ['error', { ts: 'always' }],
      'import/group-exports': 'error',
      'import/no-commonjs': 'error',
      'import/no-default-export': 'error',
      'import/no-namespace': 'error',
      'import/no-unassigned-import': 'error',
      'import/prefer-default-export': 'off',
      'unicorn/no-unused-properties': 'error',
      'unicorn/string-content': 'error',
    },
  },
  prettierConfig,
]);
