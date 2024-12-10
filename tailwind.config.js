/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        'container': '1320px',
      },
      colors: {
        'primary': '#0095B4',
        'sec': '#00D8FF',
        'secon': '#149ECA'
        
      },
      backgroundImage:{
        'BannerImg':"url('/src/assets/BGD.jpg')", 
        'ServiceImg':"url('/src/assets/profile.gif')",
        'ProjectBg': "url('/src/assets/bg-w.png')",
        'ContactBg': "url('/src/assets/contact.jpg')"
      },
      fontFamily: {
        'D-font': 'Dancing Script, cursive',
        "IBM": 'IBM Plex Sans , sans-serif',
        'yellowtail': 'Yellowtail ,cursive'
      },
      dropShadow: {
        'icon': '0px 2px 20px 12px #0095B4',
      },

    },
  },
  plugins: [],
}