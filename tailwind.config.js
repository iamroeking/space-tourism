/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'desk': "url('./build/home/desktop.jpg')",
        'mob': "url('./build/home/mobile.jpg')",
        'tab': "url('./build/home/tablet.jpg')",
        'dest-desk': "url('./build/destination/background-destination-desktop.jpg')",
        'dest-mob': "url('./build/destination/background-destination-mobile.jpg')",
        'dest-tab': "url('./build/destination/background-destination-tablet.jpg')",
        'crew-desk': "url('./build/crew/background-crew-desktop.jpg')",
        'crew-mob': "url('./build/crew/background-crew-mobile.jpg')",
        'crew-tab': "url('./build/crew/background-crew-tablet.jpg')",
        'tech-desk': "url('./build/technology/background-technology-desktop.jpg')",
        'tech-mob': "url('./build/technology/background-technology-mobile.jpg')",
        'tech-tab': "url('./build/technology/background-technology-tablet.jpg')",
      },
      screens: {
        'xsm': {'max':'350px'},
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}
