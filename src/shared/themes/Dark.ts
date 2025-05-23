import { createTheme } from "@mui/material";
import { deepPurple, pink } from "@mui/material/colors";

export const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: 'rgb(22, 15, 68)',
            dark: deepPurple[900],
            light: deepPurple[500],
            contrastText: '#ffffff',
        },

        secondary: {
            main: pink[700],
            dark: pink[800],
            light: pink[400],
            contrastText: 'rgb(255, 45, 97)',
        },

        background: {
            paper:"rgba(18, 12, 61, 0.7)",
            default: 'transparent',

        },
    },
    typography: {
        allVariants: {
            color: 'white',
        },
        
        fontFamily: "'Atkinson Hyperlegible Mono', monospace",
    },

    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    color: 'white', 
                },
            },
        },

        MuiToolbar: {
          styleOverrides: {
              root: {
                  background: 'rgba(22, 15, 68)', 
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
                  backgroundColor: deepPurple[600], 
                },
              },
            },
          },

          MuiAppBar: {
            styleOverrides: {
              root: {
                background: 'rgb(22, 15, 68)', 
              },
            },
          },
        },
}); 