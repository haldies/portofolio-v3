import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tagger from "@dhiwise/component-tagger";
import compression from "vite-plugin-compression";
import path from "path";

export default defineConfig({
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 2000,
    minify: "terser", // Gunakan terser agar lebih efisien
    terserOptions: {
      compress: {
        drop_console: true, // Hapus console.log di production
        drop_debugger: true,
      },
      format: {
        comments: false,
      },
    },
  },

  plugins: [
    tsconfigPaths(),
    react(),
    tagger(),
    // Kompres hasil build jadi .gz dan .br
    compression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 10240, // hanya file >10KB
      deleteOriginFile: false,
    }),
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 10240,
      deleteOriginFile: false,
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
  },

  server: {
    port: 4028,
    host: "0.0.0.0",
    strictPort: true,
  },
});
