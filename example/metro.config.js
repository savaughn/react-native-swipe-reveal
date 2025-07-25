const path = require('path');
const { getDefaultConfig } = require('@react-native/metro-config');
const { getConfig } = require('react-native-builder-bob/metro-config');
const pkg = require('../package.json');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

const root = path.resolve(__dirname, '..');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
module.exports = wrapWithReanimatedMetroConfig(
  getConfig(getDefaultConfig(__dirname), {
    root,
    pkg,
    project: __dirname,
    watchFolders: [
      path.resolve(root, 'src'),
    ],
    extraNodeModules: {
      'react-native-swipe-reveal': path.resolve(root, 'src'),
    },
  })
);
