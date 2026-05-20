import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

// Library build config — used by `build:lib` script
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/index.ts', 'src/components'],
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace('/src/', '/'),
        content,
      }),
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WebShared',
      fileName: 'web-shared',
    },
    rollupOptions: {
      // Exclude peer dependencies from the bundle
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'ReactJSXRuntime',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
})
