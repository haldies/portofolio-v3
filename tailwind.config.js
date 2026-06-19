/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
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
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
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
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			success: {
  				DEFAULT: 'var(--color-success)',
  				foreground: 'var(--color-success-foreground)'
  			},
  			warning: {
  				DEFAULT: 'var(--color-warning)',
  				foreground: 'var(--color-warning-foreground)'
  			},
  			error: {
  				DEFAULT: 'var(--color-error)',
  				foreground: 'var(--color-error-foreground)'
  			},
  			'tech-blue': 'var(--color-tech-blue)',
  			'innovation-green': 'var(--color-innovation-green)',
  			'conversion-amber': 'var(--color-conversion-amber)',
  			'trust-purple': 'var(--color-trust-purple)',
  			'text-secondary': 'var(--color-text-secondary)',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  			'brand-sm': '4px',
  			brand: '8px',
  			'brand-lg': '12px'
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			],
  			mono: [
  				'JetBrains Mono',
  				'Fira Code',
  				'Monaco',
  				'monospace'
  			],
  			'brand-headline': [
  				'Inter',
  				'sans-serif'
  			],
  			'brand-body': [
  				'Inter',
  				'sans-serif'
  			],
  			'brand-cta': [
  				'Inter',
  				'sans-serif'
  			],
  			'brand-accent': [
  				'JetBrains Mono',
  				'monospace'
  			]
  		},
  		fontSize: {
  			'brand-hero': [
  				'3rem',
  				{
  					lineHeight: '1.1',
  					fontWeight: '700'
  				}
  			],
  			'brand-title': [
  				'2.25rem',
  				{
  					lineHeight: '1.2',
  					fontWeight: '700'
  				}
  			],
  			'brand-subtitle': [
  				'1.5rem',
  				{
  					lineHeight: '1.3',
  					fontWeight: '600'
  				}
  			],
  			'brand-body': [
  				'1rem',
  				{
  					lineHeight: '1.6',
  					fontWeight: '400'
  				}
  			],
  			'brand-caption': [
  				'0.875rem',
  				{
  					lineHeight: '1.5',
  					fontWeight: '400'
  				}
  			]
  		},
  		spacing: {
  			'13': '3.25rem',
  			'21': '5.25rem',
  			'34': '8.5rem',
  			'55': '13.75rem'
  		},
  		boxShadow: {
  			'brand-subtle': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
  			'brand-medium': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  			'brand-large': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.5s ease-out',
  			'slide-up': 'slideUp 0.4s ease-out',
  			'slide-down': 'slideDown 0.4s ease-out',
  			'scale-in': 'scaleIn 0.3s ease-out',
  			'pulse-brand': 'pulseBrand 2s ease-in-out infinite',
  			'meteor-effect': 'meteor 5s linear infinite'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			slideUp: {
  				'0%': {
  					transform: 'translateY(20px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			slideDown: {
  				'0%': {
  					transform: 'translateY(-20px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			scaleIn: {
  				'0%': {
  					transform: 'scale(0.95)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'scale(1)',
  					opacity: '1'
  				}
  			},
  			pulseBrand: {
  				'0%, 100%': {
  					transform: 'scale(1)',
  					opacity: '1'
  				},
  				'50%': {
  					transform: 'scale(1.05)',
  					opacity: '0.8'
  				}
  			},
  			meteor: {
  				'0%': {
  					transform: 'rotate(215deg) translateX(0)',
  					opacity: '1'
  				},
  				'70%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'rotate(215deg) translateX(-900px)',
  					opacity: '0'
  				}
  			}
  		},
  		backdropBlur: {
  			brand: '10px'
  		},
  		transitionTimingFunction: {
  			brand: 'cubic-bezier(0.4, 0, 0.2, 1)'
  		},
  		transitionDuration: {
  			brand: '300ms',
  			'brand-fast': '200ms'
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
