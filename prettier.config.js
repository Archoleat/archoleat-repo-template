export default {
  overrides: [
    {
      files: ['*.js', '*.ts', '*.yaml'],
      options: {
        singleQuote: true,
      },
    },
    {
      files: ['*.json'],
      options: {
        trailingComma: 'none',
      },
    },
  ],
};
