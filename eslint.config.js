import { defineFlatConfig } from 'eslint-define-config';
import { extend } from '@archoleat/eslint-flat-compatibility';

import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import typescriptParser from '@typescript-eslint/parser';

export default defineFlatConfig([
  ...extend(
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ),
  eslintPluginUnicorn.configs['flat/recommended'],
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
      },
      parser: typescriptParser,
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
  eslintConfigPrettier,
]);
