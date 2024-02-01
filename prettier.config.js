export default {
  overrides: [
    {
      files: ['*.js', '*.ts', '*.yml'],
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
