// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],
//   theme: {
//     extend: {
//       fontFamily: {
//         heading: 'Nunito Sans, sans-serif',
//         base: 'Nunito Sans, sans-serif',
//       },
//     },
//   },
//   plugins: [require('@tailwindcss/forms')],
// };


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
