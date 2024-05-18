export default {
  '**/*.md': 'remark --quite',
  '**/*': 'prettier --write',
  'src/**/*.ts': 'eslint --fix',
};
