module.exports = {
  content: [
    './components/**/*.{js,html,vue}',
    './assets/**/*.{js,html,vue}',
    './index.html',
    './src/**/*.{js,html,vue}',
    './pages/**/*.{js,html,vue}',
    './layouts/**/*.{js,html,vue}',
    './dist/**/*.{js,html}',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        highlight: 'var(--highlight-color)',
        bluelight: 'var(--blue-light)',
        bluedark: 'var(--blue-dark)',
        text: 'var(--text-color)',
        textblue: 'var(--border-color-blue)',
        background: 'var(--background-color)',
        border: 'var(--border-color)',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};
