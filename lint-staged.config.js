export default {
  '**/*.md': 'remark --quiet --frail',
  '**/*': 'prettier --write',
  'src/**/*.ts': 'eslint --fix',
};
