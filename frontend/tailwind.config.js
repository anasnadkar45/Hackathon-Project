import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      maxWidth: {
        maxContent: "1260px",
        maxContentTab: "650px"
      },
    },
  },
  plugins: [nextui({
    layout: {
      spacingUnit: 4, // in px
      disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
      dividerWeight: "1px", // h-divider the default height applied to the divider component
      fontSize: {
        tiny: "0.75rem", // text-tiny
        small: "0.875rem", // text-small
        medium: "1rem", // text-medium
        large: "1.125rem", // text-large
      },
      lineHeight: {
        tiny: "1rem", // text-tiny
        small: "1.25rem", // text-small
        medium: "1.5rem", // text-medium
        large: "1.75rem", // text-large
      },
      radius: {
        small: "8px", // rounded-small
        medium: "12px", // rounded-medium
        large: "14px", // rounded-large
      },
      borderWidth: {
        small: "1px", // border-small
        medium: "2px", // border-medium (default)
        large: "3px", // border-large
      },
    },
    themes: {
      light: {
        colors: {
          background: "#FFFFFF", // or DEFAULT
          foreground: "#11181C", // or 50 to 900 DEFAULT
          primary: {
            //... 50 to 900
            foreground: "#FFFFFF",
            DEFAULT: "#006FEE",
          },
          // ... rest of the colors
        },
      },
      dark: {
        colors: {
          background: "#000000", // or DEFAULT
          foreground: "#ECEDEE", // or 50 to 900 DEFAULT
          primary: "#000000",
          secondary: "#ffffff",
          btn: "#FFEE00",
          creamyellow:"#FFF9AA",
          coolgray: "#E2E8F0",
          deepgray: "#BCBCBC",
          lightgreen: "#6DFDBE",
          deepvoilate: "030C30",
          deepvoilate: "030C30",
          deepvoilate: "030C30",
        },
        // ... rest of the colors
      },
      mytheme: {
        // custom theme
        extend: "dark",
        colors: {
          primary: {
            DEFAULT: "#BEF264",
            foreground: "#000000",
          },
          focus: "#BEF264",
        },
      },
    },
  }),]
}

// colors: {
//   primary: "#000000",
//   secondary: "#ffffff",
//   btn: "#FFEE00",
//   coolgray: "#E2E8F0",
//   deepgray: "#BCBCBC",
//   lightgreen: "#6DFDBE",
//   deepvoilate: "030C30",
//   deepvoilate: "030C30",
//   deepvoilate: "030C30",
// }
