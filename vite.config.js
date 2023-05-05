import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'


const root = resolve(__dirname,'src')

const outDir = resolve(__dirname,'dist')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    outDir,
    emptyOutDir:true,
    rollupOptions:{
      input:{
        main : resolve(__dirname,'index.html'),
        about : resolve(__dirname,'about.html'),
        contact : resolve(__dirname,'contact.html'),
        location : resolve(__dirname,'location.html'),
        // 
        web : resolve(__dirname,'designs/web-design.html'),
        app : resolve(__dirname,'designs/app-design.html'),
        graphic : resolve(__dirname,'designs/graphic-design.html'),
      }
    }
  }
})
