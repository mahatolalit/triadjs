import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ReactThreeWrapper',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'three', '@react-three/fiber', '@react-three/drei'],
      output: {
        globals: {
          react: 'React',
          three: 'THREE',
        },
      },
    },
  },
  plugins: [dts()],
});
