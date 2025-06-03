/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cores do iPass conforme imagem
        ipass: {
          primary: '#02AB89', // Verde principal do iPass
          background: '#F5F5F5', // Cinza claro de fundo
          white: '#FFFFFF',
          gray: {
            100: '#F8F9FA',
            200: '#E9ECEF',
            300: '#DEE2E6',
            400: '#CED4DA',
            500: '#ADB5BD',
            600: '#6C757D',
            700: '#495057',
            800: '#343A40',
            900: '#212529',
          }
        },
        // Manter compatibilidade com cores antigas
        primary: {
          50: '#e6f7f4',
          100: '#ccefe9',
          200: '#99dfd3',
          300: '#66cfbd',
          400: '#33bfa7',
          500: '#02AB89', // Verde principal
          600: '#028a6e',
          700: '#026a53',
          800: '#014938',
          900: '#01291d',
        },
        secondary: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e3e6e8',
          300: '#d5dadd',
          400: '#c7cdd1',
          500: '#b9c1c6',
          600: '#949a9e',
          700: '#6f7477',
          800: '#4a4d4f',
          900: '#252728',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 