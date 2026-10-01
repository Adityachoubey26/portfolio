/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core design system tokens (Light-first)
        canvas: {
          DEFAULT: "#f8faf9", // soft off-white / very light gray-green
          subtle: "#f0f4f2",
          muted: "#e8efeb",
        },
        surface: {
          DEFAULT: "#ffffff",
          elevated: "#ffffff",
          subtle: "#f8faf9",
          card: "#ffffff",
        },
        text: {
          main: "#0f172a", // deep slate
          secondary: "#334155",
          muted: "#64748b",
          subtle: "#94a3b8",
        },
        teal: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488", // primary teal
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          DEFAULT: "#0d9488",
        },
        cyan: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7", // secondary cyan/blue
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          DEFAULT: "#0284c7",
        },
        mint: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981", // accent mint
          600: "#059669",
          700: "#047857",
          DEFAULT: "#10b981",
        },
        border: {
          subtle: "rgba(15, 23, 42, 0.08)",
          DEFAULT: "rgba(15, 23, 42, 0.12)",
          medium: "rgba(15, 23, 42, 0.18)",
          teal: "rgba(13, 148, 136, 0.2)",
        },
        // Semantic aliases
        primary: {
          DEFAULT: "#0d9488", // Teal
          hover: "#0f766e",
          light: "#ccfbf1",
        },
        secondary: {
          DEFAULT: "#0284c7", // Cyan/Light Blue
          hover: "#0369a1",
          light: "#e0f2fe",
        },
        accent: {
          DEFAULT: "#10b981", // Mint
          hover: "#059669",
          light: "#d1fae5",
        },
        background: "#f8faf9",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        handwriting: ['Caveat', 'cursive'],
      },
      boxShadow: {
        'soft-xs': '0 1px 2px 0 rgba(15, 23, 42, 0.04)',
        'soft': '0 2px 8px -1px rgba(15, 23, 42, 0.05), 0 1px 3px -1px rgba(15, 23, 42, 0.03)',
        'card': '0 10px 30px -4px rgba(15, 23, 42, 0.06), 0 4px 12px -2px rgba(15, 23, 42, 0.02)',
        'card-hover': '0 20px 40px -10px rgba(15, 23, 42, 0.09), 0 8px 16px -4px rgba(15, 23, 42, 0.03)',
        'elevated': '0 25px 50px -12px rgba(15, 23, 42, 0.10), 0 0 1px 1px rgba(15, 23, 42, 0.05)',
        'teal-glow': '0 12px 30px -8px rgba(13, 148, 136, 0.22)',
        'cyan-glow': '0 12px 30px -8px rgba(2, 132, 199, 0.20)',
      },
      borderRadius: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'ping-subtle': 'pingSubtle 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        pingSubtle: {
          '75%, 100%': { transform: 'scale(1.8)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
