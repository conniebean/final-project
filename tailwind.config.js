/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {},
        daisyui: {
            themes: [
                "dim",
                "nord",
                "garden",
            ],
        },
        plugins: [require("daisyui")],
    }
}