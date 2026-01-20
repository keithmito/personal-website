/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#10B981", // Emerald 500 (Cyber Green)
                secondary: "#3B82F6", // Blue 500
                dark: "#0a0a0a",
                card: "#171717",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            animation: {
                "text-gradient": "text-gradient 1.5s linear infinite",
                "background-pan": "background-pan 3s linear infinite",
            },
            keyframes: {
                "text-gradient": {
                    to: {
                        backgroundPosition: "200% center",
                    },
                },
                "background-pan": {
                    from: {
                        backgroundPosition: "0% center",
                    },
                    to: {
                        backgroundPosition: "-200% center",
                    },
                },
            },
        },
    },
    plugins: [],
}
