import { Grid, Typography } from "@mui/material";
import React from "react";

interface IGridComponentProps {
  icon: React.ReactNode;  
  title: string;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const GridComponent: React.FC<IGridComponentProps> = ({ icon, title, xs = 12, sm = 6, md = 4, lg = 3, xl = 2 }) => {
  return (
    <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      {icon}
      <Typography variant="h6" mt={1}>
        {title}
      </Typography>
    </Grid>
  );
}

export default GridComponent;
