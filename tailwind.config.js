import typography from "@tailwindcss/typography";
import debugScreens from "tailwindcss-debug-screens";
import defaultTheme from "tailwindcss/defaultTheme";
import tailwindCssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": {
              content: "none"
            },
            "blockquote p:first-of-type::after": {
              content: "none"
            }
          }
        }
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          ...defaultTheme.fontFamily.sans
        ],
        display: [
          "var(--font-calsans)"
        ]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))"
      },
      animation: {
        "fade-in": "fade-in 1s ease-in-out forwards",
        title: "title 1s ease-out forwards",
        "fade-left": "fade-left 1s ease-in-out forwards",
        "fade-right": "fade-right 1s ease-in-out forwards",
        "fade-top": "fade-top 3s ease-in-out infinite"
      },
      keyframes: {
        "fade-top": {
          "0%": {
            opacity: "100%"
          },
          "50%": {
            opacity: "50%"
          },
          "100%": {
            opacity: "0%"
          }
        },
        "fade-in": {
          "0%": {
            opacity: "0%"
          },
          "75%": {
            opacity: "0%"
          },
          "100%": {
            opacity: "100%"
          }
        },
        "fade-left": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0%"
          },
          "30%": {
            transform: "translateX(0%)",
            opacity: "100%"
          },
          "100%": {
            opacity: "0%"
          }
        },
        "fade-right": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0%"
          },
          "30%": {
            transform: "translateX(0%)",
            opacity: "100%"
          },
          "100%": {
            opacity: "0%"
          }
        },
        title: {
          "0%": {
            "line-height": "0%",
            "letter-spacing": "0.25em",
            opacity: "0"
          },
          "25%": {
            "line-height": "0%",
            opacity: "0%"
          },
          "80%": {
            opacity: "100%"
          },
          "100%": {
            "line-height": "100%",
            opacity: "100%"
          }
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))"
        }
      }
    }
  },
  plugins: [
    typography,
    debugScreens,
    tailwindCssAnimate
  ],
};

export default tailwindConfig;

