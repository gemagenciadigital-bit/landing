/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./landing/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: '#0f172a',
                    primary: '#10b981',
                    accent: '#f59e0b',
                    surface: '#1e293b',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
            }
        }
    },
    plugins: [],
}
