import { createTheme } from "@mui/material";
import { orange, blue, lightBlue } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: orange[600],
      dark: orange[700],
      light: orange[500],
      contrastText: "#ffffff",
    },

    secondary: {
      main: blue[700],
      dark: blue[800],
      light: blue[300],
      contrastText: lightBlue[700],
    },

    background: {
      paper: "#ffffffc5",
      default: "#0aade31f",
    },
  },

  typography: {
    fontFamily: "'Atkinson Hyperlegible Mono', monospace",
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          color: "#000",
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          background: orange[600],
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: 19,
          height: 40,
          transition: "all 0.3s ease",
          "&:hover": {
            borderRadius: 19,
            backgroundColor: orange[400],
          },
        },
      },
    },
  },
});
