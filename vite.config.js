import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// Vite ko batate hain ki Tailwind plugin bhi chalana hai
export default defineConfig({
  plugins: [tailwindcss()],
})
