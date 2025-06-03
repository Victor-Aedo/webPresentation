/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  'custom-gray': '#23262F', 
		  'customs-title-text': 'RGB(252,248,251)',
		  'custom-subtitle-text': '#C1C3C8'
		},
		typography: {
		  DEFAULT: {
			css: {
			  strong: {
				fontWeight: '900', 
				color: 'RGB(252,248,251)',
			  },
			  h1: {
				fontWeight: '900', 
				color: 'RGB(252,248,251)', 
			  },
			  h2: {
				fontWeight: '900',
				color: 'RGB(252,248,251)', 
			  },
			  h3: {
				fontWeight: '900',
				color: 'RGB(252,248,251)', 
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
  