// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-dark': '#0a0f1c',
        'cyber-blue': '#0ea5e9',
        'cyber-metal': '#1e293b',
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(to bottom, #0f172a, #020617)',
      },
      boxShadow: {
        'neon': '0 0 10px rgba(14, 165, 233, 0.5), 0 0 20px rgba(14, 165, 233, 0.3)',
      }
    },
  },
  plugins: [],
}