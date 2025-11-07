import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#0B4CFE" },
    secondary: { main: "#6EA3F3" },
    background: {
      default: "#070B14",
      paper: "#0B1020",
    },
    text: {
      primary: "#EAF2FF",
      secondary: "#B9D5FD",
    },
  },
  typography: {
    fontFamily:
      'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
    h1: { fontWeight: 800, letterSpacing: "-0.5px" },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    body1: { fontWeight: 400 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 14 },
});

export default theme;
