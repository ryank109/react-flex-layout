module.exports = api => {
  api.cache(() => process.env.NODE_ENV);

  const presets = [
    ['@babel/preset-env', { modules: false }],
    '@babel/preset-react',
  ];

  return {
    presets,
  };
};
