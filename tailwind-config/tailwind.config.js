/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["../*.{html,js,php}",
    "../assets/**/*.{html,css,js,php}",
    "../assets/plugins/**/*.{html,css,js,php}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      important: true,
      fontFamily: {
        body: 'Inter, sans-serif',
        roboto: 'Roboto Flex, sans-serif',
        montserrat: 'Montserrat, sans-serif',
        arial: 'Arial, sans-serif',
      },

      colors: {
        "white": "#ffffff",
        'tamarillo': {
          '50': '#fef2f2',
          '100': '#fee2e2',
          '200': '#ffc9ca',
          '300': '#fda4a5',
          '400': '#fa6f71',
          '500': '#f14245',
          '600': '#de2427',
          '700': '#bb1a1c',
          '800': '#9e1a1c',
          '900': '#801c1e',
          '950': '#9E1A3F',
        },

      },
      screens: {
        'xs': '568px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1390px',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding, top, bottom',
      },
      boxShadow: {
        'custom': '0 1px 10px 0px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  variants: {
    height: ['responsive', 'hover', 'focus', 'relative'],
    spacing: ['absolute', 'relative'],
    scrollbar: ['rounded'],
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('autoprefixer'),
    require('flowbite/plugin')
  ],

}