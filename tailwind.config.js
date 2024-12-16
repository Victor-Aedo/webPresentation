/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  'custom-gray': '#23262F', // Define el color personalizado
		  'customs-title-text': 'RGB(252,248,251)',
		  'custom-subtitle-text': '#C1C3C8'
		},
		typography: {
		  DEFAULT: {
			css: {
			  strong: {
				fontWeight: '900', // Hacer la fuente más gruesa
				color: 'RGB(252,248,251)', // Cambiar el color a blanco
			  },
			  h1: {
				fontWeight: '900', // Aseguramos que los títulos también sean gruesos
				color: 'RGB(252,248,251)', // Los títulos también serán blancos
			  },
			  h2: {
				fontWeight: '900', // Aseguramos que los títulos también sean gruesos
				color: 'RGB(252,248,251)', // Los títulos también serán blancos
			  },
			  h3: {
				fontWeight: '900', // Hacer que h3 también tenga negrita
				color: 'RGB(252,248,251)', // Cambiar el color a blanco
			  },
			  h4: {
				fontWeight: '900',
				color: 'RGB(252,248,251)',
			  },
			  h5: {
				fontWeight: '900',
				color: 'RGB(252,248,251)',
			  },
			  h6: {
				fontWeight: '900',
				color: 'RGB(252,248,251)',
			  },
			  p: {
				color: '#C1C3C8'
			  }
			},
		  },
		},
	  },
	},
	plugins: [
	  require('@tailwindcss/typography'), // Añade este plugin para soportar la clase 'prose'
	],
  }
  