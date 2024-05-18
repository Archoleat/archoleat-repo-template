export default {
  '**/*.md': 'remark --quiet',
  '**/*': 'prettier --write',
  'src/**/*.ts': 'eslint --fix',
};
