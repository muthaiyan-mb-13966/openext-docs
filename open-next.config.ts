//
const catalystImageWrapper = require('@zcatalyst/nextjs-plugin/dist/adapters/image-function-wrapper');
const catalystImageLoader = require('@zcatalyst/nextjs-plugin/dist/adapters/image-loader');
const catalystIncrementalCache = require("@zcatalyst/nextjs-plugin/dist/adapters/incremental-cache");
const catalystTagCache = require('@zcatalyst/nextjs-plugin/dist/adapters/tag-cache');
const catalystWrapper = require('@zcatalyst/nextjs-plugin/dist/adapters/wrapper');

const buildConfig = {
  default: {
    override: {
      converter: 'node',
      wrapper: async () => catalystWrapper,
      incrementalCache: async () => catalystIncrementalCache,
      tagCache: async () => catalystTagCache,
      queue: "direct"
    },
  },
  imageOptimization: {
    loader: async () => catalystImageLoader,
    override: {
      converter: 'node',
      wrapper: async () => catalystImageWrapper
    }
  },
  buildCommand: process.env.ZC_BUILD_COMMAND ?? "npm run build"
};

module.exports = buildConfig;
