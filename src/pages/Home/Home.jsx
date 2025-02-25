import styles from './Home.module.css';
import backGround from '../../assets/img/dev_background.png';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';

const Home = () => {
  return (
    <div 
      className={`container ${styles.home}`} 
      style={{ 
        backgroundImage: `url(${backGround})`}}
        id='home'
    >
      <AnimatedSection id="home">
        <div className={styles.homeContainer}>
          <h2>Olá, forasteiro!<span className={styles.wave}>👋</span></h2>
          <h1 className={styles.typing}>Meu nome é Leandro:)</h1>
          <h2>Desenvolvedor Front-end</h2>
          <div className={styles.medias}>
            <div className={styles.trace}></div>
            <a href="https://github.com/lendrw" target="_blank" rel="noopener noreferrer">
              <FaGithub className={styles.icon}/>
            </a>
            <a href="https://www.linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={styles.icon}/>
            </a>
            <a href="mailto:leandrocabral321@gmail.com">
              <FaEnvelope className={styles.icon}/>
            </a>
            <div className={styles.trace}></div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;
