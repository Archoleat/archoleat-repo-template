export default {
  overrides: [
    {
      files: ['*.js', '*.ts', '*.yaml', '*.yml'],
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
