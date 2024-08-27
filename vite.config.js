import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      assets: '/src/assets',
      layout: '/src/layout',
      components: '/src/components',
      hooks: '/src/hooks',
    }
  }
})
