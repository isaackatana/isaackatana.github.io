import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePluginSass from 'vite-plugin-sass'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePluginSass()],
  base: "/isaac-katana",
})
