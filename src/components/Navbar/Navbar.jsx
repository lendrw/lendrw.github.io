import LightDark from '../LightDark/LightDark';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1>Leandro Freire</h1>
      <ul>
        <li>Início</li>
        <li>Sobre</li>
        <li>Projetos</li>
        <li>Contato</li>
        <li>
          <LightDark/>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
