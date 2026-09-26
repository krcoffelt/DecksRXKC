import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import netlify from '@netlify/vite-plugin-tanstack-start'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    tanstackStart({
      router: {
        // Split each route's loader into its own chunk so page content data
        // is only downloaded by the pages that use it.
        codeSplittingOptions: {
          defaultBehavior: [['loader'], ['component'], ['pendingComponent', 'errorComponent', 'notFoundComponent']],
        },
      },
    }),
    netlify(), viteReact(), tailwindcss()],
})
