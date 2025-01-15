import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: { // setting untuk melakukan lazy load
          'users': [
            './src/components/User.vue',
            './src/components/UserProfile.vue',
            './src/components/UserHeader.vue',
            './src/components/UserFooter.vue',
            './src/components/UserOrder.vue',
            './src/components/UserWishlist.vue',
          ]
        }
      }
    }
  }
})
