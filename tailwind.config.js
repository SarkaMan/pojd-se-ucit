export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: 'Embed code, sans-serif',
        base: 'Embed code, sans-serif',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
