/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./component/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	// variants: {
	// 	backgroundColor: ["responsive", "hover", "focus", "active"],
	// },
	theme: {
		container: {
			center: true,
			padding: "80px",
			screens: {
				"2xl": "1400px",
			},
		},
		fontFamily: {
			inter: ["var(--font-inter)"],
			poppins: ["var(--font-poppins)"],
			montserrat: ["var(--font-montserrat)"],
			code: ["--font-fira-code"],
		},
		extend: {
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				showToBottom: "showToBottom 0.5s ease-out",
				wave: "wave 1s ease-in-out infinite",
			},
			colors: {
				primary: "#28D8FF",
				secondary: "#ED81FF",
				tertiary: "#112021",
				background: "#fafdfc",
			},
			linearGradientColors: {
				"primary-mix": ["270deg", "#7740FF", "#278990"],
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
