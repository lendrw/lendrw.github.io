import { createTheme } from "@mui/material";
import { yellow } from "@mui/material/colors";

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: yellow[700],
            dark: yellow[800],
            light: yellow[500],
            contrastText: '#ffffff',
        },

        background: {
            paper: 'rgba(255, 255, 255, 0.596)',
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

        MuiMenuItem: {
            styleOverrides: {
              root: {
                borderRadius: 19, 
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