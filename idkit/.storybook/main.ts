import type { StorybookConfig } from '@storybook/react-webpack5'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-a11y', {
      name: '@storybook/addon-styling',
      options: {
        postCss: true,
      },
    },],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    webpackFinal: async (config, { configType }) => {
        // @ts-ignore
        config.resolve.plugins = [new TsconfigPathsPlugin()];
        // @ts-ignore
        config.resolve.fallback = {
          "fs": false,
          "tls": false,
          "net": false,
          "path": false,
          "zlib": false,
          "http": false,
          "https": false,
          "stream": false,
          "crypto": false,
          "module": false,
          "os": false,
          "url": false
        }
        
        return config;
    },
}
export default config