import { useEffect, useState } from 'react';
import { MenuItem, Theme, useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-scroll';
import StyledThemeButton from './StyledThemeButton';
import styles from './Navbar.module.css'

const sections = [
  { id: 'home', label: 'Início' },
  { id: 'about', label: 'Sobre' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'projects', label: 'Projetos' },
  { id: 'contact', label: 'Contato' },
];

export default function Navbar() {
  const [offset, setOffset] = useState(-64);
  const [navHeight, setNavHeight] = useState(64);
  const [active, setActive] = useState(false);

  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const toggleNavbar = () => {
    setActive(!active);
  };

  useEffect(() => {
    function updateOffset() {
      const marginTop = parseFloat(getComputedStyle(document.body).marginTop) || 0;
      setNavHeight(marginTop);
      setOffset(-marginTop);
    }

    updateOffset();

    window.addEventListener('resize', updateOffset);
    return () => window.removeEventListener('resize', updateOffset);
  }, []);

  return (
    <AppBar 
      className={mdDown && !active ? `${styles.navbar}` : `${styles.navbar} ${styles.active}`}
      position="fixed" 
      sx={{ flexDirection: 'row', height: navHeight }}
      >
        <Typography variant="h6" fontWeight={600} component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Link 
              to="home" 
              spy 
              smooth 
              offset={offset} 
              duration={500}
              onClick={toggleNavbar}
              style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit', marginLeft: 20 }}
            >
              {'<LF/>'}
            </Link>
          </Typography>
        <Toolbar 
          
        >
          <Box 
            className={mdDown && !active ? `${styles.navList}` : `${styles.navList} ${styles.active}`}
            sx={(theme) => ({
              background: theme.palette.primary.main
            })}
          >
              {sections.map(({ id, label }) => (
                  <MenuItem
                    key={id}
                    component={Link}
                    to={id}
                    spy
                    smooth
                    offset={offset}
                    duration={500}
                    onClick={toggleNavbar}
                  >
                    {label}
                  </MenuItem>
              ))}
              <MenuItem
                disableRipple
                sx={{
                  
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                }}
              >
              <StyledThemeButton />
            </MenuItem>
          </Box>
          <Box 
              component="div" 
              className={mdDown && active ? `${styles.navSwitch} ${styles.active}` : `${styles.navSwitch}`} 
              onClick={toggleNavbar}
            >
          </Box>
      </Toolbar>
    </AppBar>
  );
}
