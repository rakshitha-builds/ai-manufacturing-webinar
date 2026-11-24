/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { navy: '#07111F', ink: '#0B1626', brand: '#2563EB', cyan: '#22D3EE', mute: '#94A3B8' },
    fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
    keyframes: {
      shimmer: { to: { backgroundPosition: '200% 0' } },
      float: { '50%': { transform: 'translateY(-10px)' } },
      glow: { '50%': { boxShadow: '0 0 0 1px #22D3EE, 0 24px 80px -16px rgba(34,211,238,.7)' } },
      drift: { '50%': { transform: 'translate(-40px,30px)' } },
      blink: { '50%': { opacity: '.3' } },
    },
    animation: { shimmer: 'shimmer 6s linear infinite', float: 'float 7s ease-in-out infinite', glow: 'glow 4s ease-in-out infinite', drift: 'drift 16s ease-in-out infinite', blink: 'blink 1.8s infinite' },
  } },
  plugins: [],
}
