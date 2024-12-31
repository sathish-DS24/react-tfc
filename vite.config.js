import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const vue = require('@vitejs/plugin-vue2');
export default defineConfig({
  plugins: [react()],
  plugins: [vue()],
  server: {
    port: 3000,
  },
});