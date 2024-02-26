import globals from 'globals';

import typescriptParser from '@typescript-eslint/parser';
import unicorn from 'eslint-plugin-unicorn';

import { resolve } from 'node:path';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: resolve(),
  resolvePluginsRelativeTo: resolve(),
});

export default [
  ...compat.extends(
    'airbnb-typescript/base',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ),
  unicorn.configs['flat/recommended'],
  {
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: 'tsconfig.json',
      },
      globals: {
        ...globals.node,
      },
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
      'import/no-namespace': 'error',
      'import/no-unassigned-import': 'error',
      'unicorn/no-unused-properties': 'error',
      'unicorn/string-content': 'error',
    },
  },
];
