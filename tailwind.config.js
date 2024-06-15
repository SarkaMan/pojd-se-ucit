export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: 'Urbanist, sans-serif',
        base: 'Urbanist, sans-serif',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
