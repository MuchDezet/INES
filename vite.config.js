import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: true,        // Agar bisa diakses dari jaringan lain (bukan hanya localhost)
    port: 5173,        // Port default Vite, bisa diganti kalau perlu
    open: false        // Opsional, mencegah otomatis membuka browser di laptop
  }
})
