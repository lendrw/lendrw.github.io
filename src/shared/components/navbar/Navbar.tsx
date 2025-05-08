import { useEffect, useState } from 'react';
import { MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-scroll';
import StyledThemeButton from './StyledThemeButton';

const sections = [
  { id: 'home', label: 'Início' },
  { id: 'about', label: 'Sobre' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'projects', label: 'Projetos' },
  { id: 'contact', label: 'Contato' },
];

export default function Navbar() {
  const [offset, setOffset] = useState(-64);

  useEffect(() => {
    function updateOffset() {
      const marginTop = parseFloat(getComputedStyle(document.body).marginTop) || 0;
      setOffset(-marginTop);
    }

    updateOffset();

    window.addEventListener('resize', updateOffset);
    return () => window.removeEventListener('resize', updateOffset);
  }, []);

  return (
    <AppBar position="fixed">
      <Toolbar>
      <Typography variant="h6" fontWeight={600} component="div" sx={{ flexGrow: 1 }}>
          <Link 
            to="home" 
            spy 
            smooth 
            offset={offset} 
            duration={500}
            style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
          >
            {'<LF/>'}
          </Link>
        </Typography>
        <Box display="flex">
            {sections.map(({ id, label }) => (
                <MenuItem
                  key={id}
                  component={Link}
                  to={id}
                  spy
                  smooth
                  offset={offset}
                  duration={500}
                >
                  {label}
                </MenuItem>
            ))}
          <MenuItem sx={{
            '&:hover': {
              backgroundColor: 'transparent', 
            },
          }}>
            <StyledThemeButton/>
          </MenuItem>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
