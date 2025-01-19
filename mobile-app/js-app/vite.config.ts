import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        // Ensure all code is bundled into a single file
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
        manualChunks: undefined, // Prevent code splitting
        format: 'iife', // Output format as an Immediately Invoked Function Expression
      },
    },
    // Disable CSS code splitting
    cssCodeSplit: false,
    // Disable source maps
    sourcemap: false,
    // Clear the output directory before building
    emptyOutDir: true,
    // Define the output directory
    outDir: '../www/js/build',
  },
});
