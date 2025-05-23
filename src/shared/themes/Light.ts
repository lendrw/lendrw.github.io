import { createTheme } from "@mui/material";
import { yellow, blue, lightBlue } from "@mui/material/colors";

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: yellow[700],
            dark: yellow[800],
            light: yellow[500],
            contrastText: '#ffffff',
        },

        secondary: {
            main: blue[700],
            dark: blue[800],
            light: blue[300],
            contrastText: lightBlue[700],
        },

        background: {
            paper: 'rgba(223, 223, 223, 0.6)',
            default: '#f7f6f3',
        },

    },

    typography: {
        fontFamily: "'Atkinson Hyperlegible Mono', monospace",
      },

      components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    color: '#000', 
                },
            },
        },
        
        MuiToolbar: {
            styleOverrides: {
                root: {
                    background: yellow[700], 
                },
            },
        },

        MuiMenuItem: {
            styleOverrides: {
              root: {
                borderRadius: 19, 
                height: 40,
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderRadius: 19, 
                  backgroundColor: yellow[600], 
                },
              },
            },
          },
        },
      });