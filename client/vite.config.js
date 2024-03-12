import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    port: 3000,
    open: true,
    // Proxy:{
    //   "/graphql": {
    //     target:"http://loaclhost:3001",
    //     secure: false, changeOrigin: true,
    //   }
    // }
  }
})
