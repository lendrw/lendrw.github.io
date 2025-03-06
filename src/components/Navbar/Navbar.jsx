import { useState } from 'react';
import LightDark from '../LightDark/LightDark';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleNavbar = () => {
    setActive(!active);
  };

  return (
    <nav className={`${styles.navbar} ${active ? styles.active : ''}`}>
      <a href="#home">
        <h1>&lt;LEANDRO<span>FREIRE</span>/&gt;</h1>
      </a>
      <div
        className={styles.navSwitch}
        onClick={toggleNavbar}
      ></div>
      <ul className={styles.navList}>
        <li><a href="#home" onClick={toggleNavbar}>Início</a></li>
        <li><a href="#about" onClick={toggleNavbar}>Sobre</a></li>
        <li><a href="#skills" onClick={toggleNavbar}>Habilidades</a></li>
        <li><a href="#projects" onClick={toggleNavbar}>Projetos</a></li>
        <li><a href="#contact" onClick={toggleNavbar}>Contato</a></li>
        <li><LightDark/></li>
      </ul>
    </nav>
  );
};

export default Navbar;
