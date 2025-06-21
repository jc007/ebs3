import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ebs3.onrender.com',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
