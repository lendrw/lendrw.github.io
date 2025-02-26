import LightDark from '../LightDark/LightDark';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="#home">
        <h1>&lt;LEANDRO<span>FREIRE</span>/&gt;</h1>
      </a>
      <ul>
        <li><a href="#home">Início</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#contact">Contato</a></li>
        <li><LightDark /></li>
      </ul>
    </nav>
  );
}

export default Navbar;
