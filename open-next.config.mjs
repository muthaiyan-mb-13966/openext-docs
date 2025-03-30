
import catalystImageWrapper from '@zcatalyst/nextjs-plugin/dist/adapters/image-function-wrapper';
import catalystImageLoader from '@zcatalyst/nextjs-plugin/dist/adapters/image-loader';
import catalystIncrementalCache from  "@zcatalyst/nextjs-plugin/dist/adapters/incremental-cache";
import catalystTagCache from '@zcatalyst/nextjs-plugin/dist/adapters/tag-cache';
import catalystWrapper from '@zcatalyst/nextjs-plugin/dist/adapters/wrapper';

const buildConfig = {
  default: {
    override: {
      converter: 'node',
      wrapper: async () => catalystWrapper,
      incrementalCache: async () => catalystIncrementalCache,
      tagCache: async () => catalystTagCache,
      queue:"direct"
    },
  },
  imageOptimization: {
    loader: async () => catalystImageLoader,
    override:{
      converter: 'node',
      wrapper: async () => catalystImageWrapper
    }
  },
  buildCommand: process.env.ZC_BUILD_COMMAND ?? "npm run build"
};

export default buildConfig;
