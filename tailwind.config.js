/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grayish': "#EAF1F1",
        'nephritis': '#329993'
      },
      backgroundImage: {
        'messages': "url('/icons/letter.svg')",
        'messages_active': "url('/icons/letter_active.svg')",
        'contacts': "url('/icons/contacts.svg')",
        'contacts_active': "url('/icons/contacts_active.svg')",
        'profile': "url('/icons/profile.svg')",
        'profile_active': "url('/icons/profile_active.svg')",
      }
    },
  },
  plugins: [],
}
