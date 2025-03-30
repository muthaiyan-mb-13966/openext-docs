


const buildConfig = {
    default: {
      override: {
        converter: 'node',
        wrapper: async () => import('@zcatalyst/nextjs-plugin/dist/adapters/wrapper.js'),
        incrementalCache: async () => import('@zcatalyst/nextjs-plugin/dist/adapters/incremental-cache.js'),
        tagCache: async () => import('@zcatalyst/nextjs-plugin/dist/adapters/tag-cache.js'),
        queue:"direct"
      },
    },
    imageOptimization: {
      loader: async () => import('@zcatalyst/nextjs-plugin/dist/adapters/image-loader.js'),
      override:{
        converter: 'node',
        wrapper: async () => import('@zcatalyst/nextjs-plugin/dist/adapters/image-function-wrapper.js'),
      }
    },
    buildCommand: process.env.ZC_BUILD_COMMAND ?? "npm run build"
  };
  
  export default buildConfig;
  