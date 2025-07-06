import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',  // ✅ Required for GitHub Pages if repo is username.github.io
  plugins: [react()],
})
