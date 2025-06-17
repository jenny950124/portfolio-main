import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: '', // ✅ 중요: assets를 dist 바로 아래에 빌드되게 함
  },
});
