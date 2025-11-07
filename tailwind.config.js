/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            backgroundColor: {
                'darkBlue': '#000a1f',
                'neonBlue': '#00c7ff',
            },
            textColor: {
                'darkBlue': '#000a1f',
                'neonBlue': '#00c7ff',
            },
            borderColor: {
                'darkBlue': '#000a1f',
                'neonBlue': '#00c7ff',
            },
        },
    },
    plugins: [],
}