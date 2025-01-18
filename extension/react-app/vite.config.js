import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";


export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Ensure all code is bundled into a single file
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
        // Prevent code splitting
        manualChunks: undefined,
        // Ensure a single JavaScript bundle
        format: 'iife'
      },
    },
    // Disable chunk splitting
    cssCodeSplit: false,
    // Prevent generating separate source maps
    sourcemap: false,
    emptyOutDir: true,
    outDir: '../public/app',
  },
  // If you need to resolve specific paths
  resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      }
  },
})