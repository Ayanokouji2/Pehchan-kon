import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	define: {
		'process.env': {}
	},
	server:{
		proxy:{
			'/api/v1' : "http://localhost:5000"
		}
	}
})

