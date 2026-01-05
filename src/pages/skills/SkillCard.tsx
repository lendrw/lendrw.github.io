import { Box, Paper, Typography } from "@mui/material";
import { ReactNode } from "react";

interface Card {
  title: string;
  icon: ReactNode;
}

export const SkillCard: React.FC<Card> = ({ title, icon }) => {
  return (
    <Box
      component={Paper}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        borderTopLeftRadius: "40px",
        borderBottom: (theme) => `3px solid ${theme.palette.secondary.light}`,
        borderLeft: (theme) => `2px solid ${theme.palette.secondary.light}`,
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: (theme) => theme.palette.secondary.light,
          borderBottom: (theme) => `3px solid ${theme.palette.secondary.dark}`,
          borderLeft: (theme) => `2px solid ${theme.palette.secondary.dark}`,
          transform: "scale(1.1)",
        },
        width: "clamp(8em, 9.5em, 11em)",
        height: "clamp(8em, 9.5em, 11em)",
      }}
    >
      <Box sx={{ fontSize: { xs: 40, sm: 40, md: 45, lg: 48 }, mb: 0.5 }}>
        {icon}
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: 13, sm: 14, md: 14.5, lg: 15 },
            lineHeight: 1,
            maxWidth: "95%",
          }}
          textAlign="center"
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};
