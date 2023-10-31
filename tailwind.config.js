/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#465352',
        'concrete': '#758A89',
        'grayish': "#EAF1F1",
        'light-gray': '#EEF1F1',
        'light': '#E3E8E7',
        'nephritis': '#329993',
        'light-nephritis': '#E8F7F7',
        'light-green': '#00B207',
        'red': '#DD0000'
      },
      backgroundImage: {
        'messages': "url('/icons/letter.svg')",
        'messages_active': "url('/icons/letter_active.svg')",
        'contacts': "url('/icons/contacts.svg')",
        'contacts_active': "url('/icons/contacts_active.svg')",
        'profile': "url('/icons/profile.svg')",
        'profile_active': "url('/icons/profile_active.svg')",
        'logout': "url('/icons/logout.svg')",
        'search': "url('/icons/search.svg')",
        'plus': "url('/icons/plus.svg')",
        'call': "url('/icons/call.svg')",
        'video': "url('/icons/video.svg')",
        'option': "url('/icons/points.svg')",
        'read': "url('/icons/read_status.svg')",
        'unread': "url('/icons/unread_status.svg')",
      }
    },
  },
  plugins: [],
}

