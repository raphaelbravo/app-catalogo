module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          utils: './src/utils',
          screens: './src/screens',
          components: './src/components',
          navigation: './src/navigation',
          models: './src/models',
          store: './src/store',
          database: './src/database',
          api: './src/api',
        },
      },
    ],
  ],
};
