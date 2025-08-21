import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// Core brand colors
				bg: 'hsl(var(--bg))',
				card: 'hsl(var(--card))',
				ink: 'hsl(var(--ink))',
				muted: 'hsl(var(--muted))',
				accent: 'hsl(var(--accent))',
				pop: 'hsl(var(--pop))',
				border: 'hsl(var(--border))',
				
				// Semantic mappings for shadcn compatibility
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				'muted-bg': 'hsl(var(--muted-bg))',
				'muted-foreground': 'hsl(var(--muted-foreground))',
				'accent-bg': 'hsl(var(--accent-bg))',
				'accent-foreground': 'hsl(var(--accent-foreground))',
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				'card-bg': 'hsl(var(--card-bg))',
				'card-foreground': 'hsl(var(--card-foreground))'
			},
			fontFamily: {
				heading: ['var(--font-heading)'],
				body: ['var(--font-body)'],
				mono: ['var(--font-mono)']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				gradient: {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				'marquee-reverse': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0%)' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				float: 'float 6s ease-in-out infinite',
				gradient: 'gradient 8s ease infinite',
				marquee: 'marquee 20s linear infinite',
				'marquee-reverse': 'marquee-reverse 20s linear infinite',
				'fade-in': 'fade-in 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
				pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
