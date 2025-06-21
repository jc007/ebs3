import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://ebs3.onrender.com',
  output: 'static',
  build: {
    assets: 'assets'
  },
  integrations: [
    react() // Required for TinaCMS admin interface
  ],
  vite: {
    define: {
      'process.env.NEXT_PUBLIC_TINA_CLIENT_ID': JSON.stringify(process.env.NEXT_PUBLIC_TINA_CLIENT_ID),
      'process.env.TINA_TOKEN': JSON.stringify(process.env.TINA_TOKEN),
    }
  }
});