/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				primary: 'Inter',
			},

			spacing: {
				1: '1px',
				2: '2px',
				3: '3px',
				4: '4px',
				5: '5px',
				6: '6px',
				7: '7px',
				8: '8px',
				9: '9px',
				10: '10px',
				14: '14px',
				20: '20px',
				30: '30px',
				40: '40px',
				50: '50px',
				60: '60px',
				70: '70px',
				80: '80px',
				100: '100px',
				200: '200px',
			},

			colors: {
				transparent: 'transparent',
				current: 'currentColor',

				primary: '#43A5C3',
				primaryLight: '#5eb3cd',
				primaryLightest: '#D8EEF5',
				secondary: '#CB324C',
				greyDark: '#363636',
				grey: '#4F4F4F',
				greyLight: '#B8B8B8',
				greyLightest: '#F6F6F6',
			},

			boxShadow: {
				component: '0 1px 0px rgba(0,0,0,0.1)',
				panel: '0 2px 7px rgba(0,0,0,0.1)',
				panelLarge:
					'0 2px 7px rgba(0,0,0,0.1), 0 30px 50px rgba(0,0,0,0.1)',
			},

			animation: {
				fadeUp: 'fadeUp 0.7s ease-in-out',
				fadeDown: 'fadeDown 0.7s ease-in-out',
			},
			keyframes: {
				fadeUp: {
					'0%': {
						transform: 'translateY(10px)',
						opacity: '0',
					},
					'50%': {
						transform: 'translateY(0)',
						opacity: '1',
					},
				},
				fadeDown: {
					'0%': {
						transform: 'translateY(0)',
						opacity: '1',
					},
					'50%': {
						transform: 'translateY(10px)',
						opacity: '0',
					},
				},
			},
		},
	},
	plugins: [],
}
