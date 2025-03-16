import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  esbuild: {
    logLevel: 'silent', // Suppress esbuild warnings
  },
  build: {
    minify: false, // (Optional) Prevent minification issues
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code !== 'THIS_IS_UNDEFINED') {
          warn(warning); // Ignore specific warnings
        }
      },
    },
  },
})
