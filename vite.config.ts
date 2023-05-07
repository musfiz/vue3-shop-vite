import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/app.scss";
        `
      }
    }
  }
})
