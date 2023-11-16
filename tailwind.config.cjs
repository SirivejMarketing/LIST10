/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class", '[data-theme="dark"]'],
    content: ["./resources/**/*.svelte"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            "light",
            "dark",
            "cupcake",
            {
                day: {
                    primary: "#00518c",
                    secondary: "#e1efec",
                    accent: "#1fb2a6",
                    neutral: "#2b3440",
                    "base-100": "#ffffff",
                    info: "#3abff8",
                    success: "#36d399",
                    warning: "#fbbd23",
                    error: "#f87272",
                },
                dawn: {
                    primary: "#00518c", // cyan
                    secondary: "#ffffff", // white
                    accent: "#f87272", // red
                    neutral: "#2a323c", // dark gray
                    "base-100": "#1d232a", // lighter gray
                    info: "#abd9e9", // light blue
                    success: "#36d399", // light green
                    warning: "#fbbd23", // yellow
                    error: "#f87272", // red
                },
            },
        ],
        darkTheme: "dawn", // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
        themeRoot: ":root", // The element that receives theme color CSS variables
    },
};
