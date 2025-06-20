import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jc007.github.io',
  base: '/ebs3', // Remove this line if using custom domain or username.github.io
  output: 'static',
  build: {
    assets: 'assets'
  }
});