import { Box, Typography, useMediaQuery, useTheme, Theme } from "@mui/material"
import React, { ReactNode } from "react"

interface IPageLayoutProps {
    children: ReactNode;
    title?: string;
    id: string;
    backgroundImage?: string; 
    hasBgFilter?: boolean;
}

export const PageLayout: React.FC<IPageLayoutProps> = ({ id, children, title, backgroundImage, hasBgFilter }) => {
    const theme = useTheme();
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

    return (
        <Box
          id={id}
          minHeight={{ xs: 'calc(100dvh - 56px)', sm: 'calc(100dvh - 64px)' }}
          display="flex"
          flexDirection="column"
          gap={1}
          position="relative" 
          sx={{
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          
          {hasBgFilter && (
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgcolor={theme.palette.mode === 'dark' 
                  ? 'rgba(32, 18, 94, 0.5)'  
                  : 'rgba(255, 242, 198, 0.5)' 
                } 
                zIndex={1}
            />
          )}
      
          <Box
            flex={1}
            overflow="hidden"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            position="relative" 
            zIndex={2}
          >
            {title && (
              <Box 
                padding={1}
                height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap={1}
                marginBottom={2}
              >
                <Typography
                  variant={smDown ? "h5" : mdDown ? "h4" : "h3"}
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  {title}
                </Typography>
              </Box>
            )}
      
            {children}
          </Box>
        </Box>
      )
      
}
