import { defineConfig } from '@archoleat/commitlint-define-config';

export default defineConfig({
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-trim': [2, 'always'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'spec',
        'style',
      ],
    ],
  },
});
