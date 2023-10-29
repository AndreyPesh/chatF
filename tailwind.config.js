/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grayish': "#EAF1F1"
      },
      backgroundImage: {
        'messages': "url('/public/icons/letter.svg')",
        'messages_active': "url('/public/icons/letter_active.svg')",
        'contacts': "url('/public/icons/contacts.svg')",
        'contacts_active': "url('/public/icons/contacts_active.svg')",
        'profile': "url('/public/icons/profile.svg')",
        'profile_active': "url('/public/icons/profile_active.svg')",
      }
    },
  },
  plugins: [],
}

