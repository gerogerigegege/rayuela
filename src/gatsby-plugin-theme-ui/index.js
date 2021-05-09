import { tosh as light } from "@theme-ui/presets"
import { merge } from "theme-ui"

import "@fontsource/crimson-pro"
import "@fontsource/crimson-pro/600.css"

const theme = merge(light, {
  colors: {
    secondary: "#FFD400",
  },
  sizes: {
    container: 640,
  },
  fonts: {
    body: "Crimson Pro",
    heading: "Crimson Pro",
  },
  fontSizes: [14, 18, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 600,
  },
  buttons: {
    primary: {
      border: theme => `1px solid ${theme.colors.primary}`,
      cursor: "pointer",
      bg: "primary",
      color: "background",
      "&:hover": {
        bg: "secondary",
        color: "primary",
      },
    },
  },
  styles: {
    p: {
      textAlign: "justify",
      // textIndent: "1.6em",
    },
    a: {
      fontWeight: "heading",
      color: "primary",
      textDecoration: "none",
      "&:hover": {
        color: "secondary",
      },
      cursor: "pointer",
    },
  },
})

export default theme
