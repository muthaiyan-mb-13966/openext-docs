
const buildConfig = {
  default: {
    override: {
      converter: 'node',
      wrapper: async () => (await import('@zcatalyst/nextjs-plugin/dist/adapters/wrapper.js')).default,
      incrementalCache: async () => (await import('@zcatalyst/nextjs-plugin/dist/adapters/incremental-cache.js')).default,
      tagCache: async () => (await import('@zcatalyst/nextjs-plugin/dist/adapters/tag-cache.js')).default,
      queue:"direct"
    },
  },
  imageOptimization: {
    loader: async () => (await import('@zcatalyst/nextjs-plugin/dist/adapters/image-loader.js')).default,
    override:{
      converter: 'node',
      wrapper: async () => (await import('@zcatalyst/nextjs-plugin/dist/adapters/image-function-wrapper.js')).default,
    }
  },
  buildCommand: process.env.ZC_BUILD_COMMAND ?? "npm run build"
};

module.exports = buildConfig;
