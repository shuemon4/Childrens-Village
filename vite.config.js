
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: [
      '22ecc33e-175e-405c-95ce-31af60e4a3e3-00-exfolfixp1a4.kirk.replit.dev',
      '.replit.dev'
    ]
  }
})
