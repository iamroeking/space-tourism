/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'desk': "url('../home/desktop.jpg')",
        'mob': "url('../home/mobile.jpg')",
        'tab': "url('../home/tablet.jpg')",
        'dest-desk': "url('../destination/background-destination-desktop.jpg')",
        'dest-mob': "url('../destination/background-destination-mobile.jpg')",
        'dest-tab': "url('../destination/background-destination-tablet.jpg')",
        'crew-desk': "url('../crew/background-crew-desktop.jpg')",
        'crew-mob': "url('../crew/background-crew-mobile.jpg')",
        'crew-tab': "url('../crew/background-crew-tablet.jpg')",
        'tech-desk': "url('../technology/background-technology-desktop.jpg')",
        'tech-mob': "url('../technology/background-technology-mobile.jpg')",
        'tech-tab': "url('../technology/background-technology-tablet.jpg')",
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
