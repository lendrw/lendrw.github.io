import { Box, Paper, Typography } from "@mui/material"
import { ReactNode } from "react";


interface Card {
    title: string;
    icon: ReactNode;
}

export const ContactCard: React.FC<Card> = ({ title, icon }) => {

    return(
        <Box 
            component={Paper} 
            display="flex" 
            flexDirection="column" 
            alignItems="center"
            justifyContent="center"
            sx={{
                borderTopLeftRadius: '40px',
                borderBottom: (theme) => `3px solid ${theme.palette.secondary.light}`,
                transition: 'all 0.3s ease', 
                "&:hover": {
                    backgroundColor: (theme) => theme.palette.secondary.light, 
                    borderBottom: (theme) => `3px solid ${theme.palette.secondary.dark}`, 
                    transform: 'scale(1.1)', 
                },
                width: { xs: '15em', sm: '16em', md: '20em', lg: '20em' },
                height: { xs: '8em', sm: '9em', md: '11em', lg: '11em' }
              }}
        >
            <Box 
                sx={{ fontSize: { xs: 40, sm: 40, md: 50 }, mb: .5 }}>
                        {icon}
            </Box>
            <Box>
                <Typography 
                    sx={{ fontSize: { xs: 13, sm: 14, md: 16 } }} 
                    textAlign="center">
                        {title}
                </Typography>
            </Box>
        </Box>
    )
}