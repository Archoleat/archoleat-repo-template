export default {
  overrides: [
    {
      files: ['*.ts', '*.js', '*.yaml', '*.yml'],
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
