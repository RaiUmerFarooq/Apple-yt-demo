import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // This fixes the "Blocked request" error
    allowedHosts: [
      'applepiper.deltainnovations.net'
    ],
    // This fixes the "Network" issue (replaces --host flag)
    host: true
  }
})
