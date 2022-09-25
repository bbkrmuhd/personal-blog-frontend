/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-image': "url('https://images.pexels.com/photos/11111431/pexels-photo-11111431.jpeg?auto=compress&cs=tinysrgb&w=800')",
        
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}