import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePluginSass from 'vite-plugin-sass';
import ViteGHPages from 'vite-plugin-gh-pages';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePluginSass(), ViteGHPages()],
  base: "/isaackatana.github.io",
})
