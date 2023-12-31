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
        'send': "url('/icons/send.svg')",
        'file': "url('/icons/file.svg')",
        'block': "url('/icons/block.svg')",
        'arrow': "url('/icons/arrow.svg')",
        'cross': "url('/icons/cross.svg')",
        'video': "url('/actions/video.svg')",
        'microphone': "url('/actions/microphone.svg')",
        'smile': "url('/actions/smile.svg')",
        'attach': "url('/actions/attach.svg')",
        'note': "url('/actions/note.svg')",
        'points': "url('/actions/points.svg')",
        'login': "url('/icons/login.svg')",
      },
      keyframes: {
        fade_in: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fade_out: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        },
        flicker: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        'appear': 'fade_in 0.3s linear',
        'disappear': 'fade_out 0.3s linear forwards',
        'flickering': 'flicker 1s linear infinite'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tw-elements/dist/plugin.cjs')
  ],
}

