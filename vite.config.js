import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'public', // Sesuaikan jika index.html di folder lain
  plugins: [react()],
});