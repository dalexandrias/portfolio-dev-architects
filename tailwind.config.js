/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // DevArchitects Brand Colors
      colors: {
        // Cores principais da marca
        'delft-blue': '#1D3461',
        'polynesian-blue': '#1F487E', 
        'lapis-lazuli': '#376996',
        'silver-lake-blue': '#6290C8',
        'vista-blue': '#829CBC',
        
        // Tons neutros aprimorados
        'off-white': '#FAFBFC',
        'light-gray': '#F7F8FA',
        'medium-gray': '#E1E5E9',
        'dark-gray': '#2D3748',
        
        // Cores funcionais
        success: '#48BB78',
        warning: '#ED8936',
        error: '#F56565',
        info: '#6290C8',
        
        // Aliases semânticos
        primary: {
          50: '#F0F4FF',
          100: '#E0EAFF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#829CBC',
          500: '#6290C8',
          600: '#376996',
          700: '#1F487E',
          800: '#1D3461',
          900: '#1A2E56',
          950: '#0F1629'
        },
        gray: {
          50: '#FAFBFC',
          100: '#F7F8FA',
          200: '#E1E5E9',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#2D3748',
          900: '#1F2937',
          950: '#111827'
        }
      },
      
      // Typography personalizada
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Monaco', 'Cascadia Code', 'monospace'],
      },
      
      // Tamanhos de texto customizados
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      
      // Espaçamentos customizados
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      
      // Breakpoints responsivos customizados
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      
      // Animações customizadas
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.7s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.7s ease-out forwards',
        'slide-in-right': 'slideInRight 0.7s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'bounce-gentle': 'bounceGentle 1s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      
      // Keyframes para animações
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      
      // Sombras customizadas
      boxShadow: {
        'glow': '0 0 20px rgba(98, 144, 200, 0.3)',
        'glow-lg': '0 0 40px rgba(98, 144, 200, 0.4)',
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'card': '0 4px 25px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.15)',
        '3d': '0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)',
      },
      
      // Gradientes customizados
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #1D3461 0%, #376996 100%)',
        'gradient-brand-soft': 'linear-gradient(135deg, #6290C8 0%, #829CBC 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
        'gradient-light': 'linear-gradient(135deg, #FAFBFC 0%, #F7F8FA 100%)',
      },
      
      // Transições customizadas
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
      },
      
      // Backdrop blur customizado
      backdropBlur: {
        'glass': '20px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
