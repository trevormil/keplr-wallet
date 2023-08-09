// eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-extraneous-dependencies
const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

const config = {
  watchFolders: [path.resolve(__dirname, "../../node_modules")],
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...sourceExts, "svg"],
    extraNodeModules: {
      crypto: path.resolve(
        __dirname,
        "./node_modules/react-native-crypto-polyfill"
      ),
      buffer: path.resolve(__dirname, "../../node_modules/buffer"),
      stream: path.resolve(__dirname, "../../node_modules/stream-browserify"),
      string_decoder: path.resolve(
        __dirname,
        "../../node_modules/string_decoder"
      ),
      path: path.resolve(__dirname, "../../node_modules/path-browserify"),
      http: path.resolve(__dirname, "../../node_modules/http-browserify"),
      https: path.resolve(__dirname, "../../node_modules/https-browserify"),
      os: path.resolve(__dirname, "../../node_modules/os-browserify"),
    },
  },
  transformer: {
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
