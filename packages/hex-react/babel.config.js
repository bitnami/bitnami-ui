module.exports = api => {
  // Remove the cache when the NODE_ENV variable changes
  api.cache(() => process.env.NODE_ENV);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: '> 0.5%, last 5 versions, last 4 Edge versions, ie 11',
        },
      ],
      '@babel/react',
    ],
    plugins: [],
  };
};
