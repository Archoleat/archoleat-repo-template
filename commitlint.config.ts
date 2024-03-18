import type { UserConfig } from '@commitlint/types';

/**
 * Define an Commitlint config.
 *
 * @param {object} config Commitlint config.
 *
 * @returns Commitlint config.
 */
const defineConfig = (config: UserConfig): UserConfig => {
  return config;
};

export default defineConfig({
  extends: ['@commitlint/config-conventional'],
  rules: {
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
