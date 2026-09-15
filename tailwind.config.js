/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: { 500: '#4F46E5', 600: '#4338CA' },
        slate: { 100: '#F1F5F9', 800: '#1E293B' },
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#F43F5E',
      }
    },
  },
  plugins: [],
};
