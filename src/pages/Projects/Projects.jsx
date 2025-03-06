import styles from './Projects.module.css';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';
import secretWord from '../../assets/img/secret_word.png';
import { FaLink } from 'react-icons/fa';

const Projects = () => {
  return (
    <div 
      className={`container ${styles.projects}`}
      id='projects'>
      <h1>Projetos</h1>
      <AnimatedSection id='projects' className={styles.animatedSection}>
        <div className={styles.projectCard}>
          <a href="https://lendrw.github.io/secret_word">
            <img src={secretWord} alt=""/>
          </a>
          <h2>Secret Word</h2>
          <p>Jogo de palavras</p>
          <span>Tecnologias utilizadas no projeto: HTML, CSS, JavaScript, React + Vite.</span>
          <div className={styles.linkButton}>
            <a href="https://lendrw.github.io/secret_word">
              <FaLink/>
              Visualizar
            </a>
          </div>
        </div>
        <div className={styles.projectCard}>
          <div className={styles.soon}>
            <img src={secretWord} alt=""/>
            <h2>Em Breve</h2>
          </div>
          <h2>...</h2>
          <p>...</p>
          <span>...</span>
          <div className={styles.linkButton}>
            <p>
              <FaLink/>
              Visualizar
            </p>
          </div>
        </div>
        <div className={styles.projectCard}>
          <div className={styles.soon}>
            <img src={secretWord} alt=""/>
            <h2>Em Breve</h2>
          </div>
          <h2>...</h2>
          <p>...</p>
          <span>...</span>
          <div className={styles.linkButton}>
            <p>
              <FaLink/>
              Visualizar
            </p>
          </div>
        </div>
        <div className={styles.projectCard}>
          <div className={styles.soon}>
            <img src={secretWord} alt=""/>
            <h2>Em Breve</h2>
          </div>
          <h2>...</h2>
          <p>...</p>
          <span>...</span>
          <div className={styles.linkButton}>
            <p>
              <FaLink/>
              Visualizar
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}

export default Projects;
