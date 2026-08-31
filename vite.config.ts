import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  resolve: {
    alias: [
      {
        find: /^@designcodeio\/threeui\/style\.css$/,
        replacement: fileURLToPath(new URL('./src/shaders/threeui.css', import.meta.url))
      },
      {
        find: /^@designcodeio\/threeui$/,
        replacement: fileURLToPath(new URL('./src/threeui/index.tsx', import.meta.url))
      }
    ]
  },
})
