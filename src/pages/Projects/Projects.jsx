import styles from './Projects.module.css';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';
import secretWord from '../../assets/img/secret_word.png';

const Projects = () => {
  return (
    <div 
      className={`container ${styles.projects}`}
      id='projects'>
      <h1>Projetos</h1>
      <AnimatedSection id='projects' className={styles.animatedSection}>
        <div>
          <a href="">
            <img src={secretWord} alt=""/>
          </a>
          <h2></h2>
          <p></p>
          <span></span>
          <div>
            Visualizar
          </div>
        </div>
        <div>
          <a href="">
            <img src="" alt="" />
          </a>
          <h2></h2>
          <p></p>
          <span></span>
          <div>
            Visualizar
          </div>
        </div>
        <div>
          <a href="">
            <img src="" alt="" />
          </a>
          <h2></h2>
          <p></p>
          <span></span>
          <div>
            Visualizar
          </div>
        </div>
        <div>
          <a href="">
            <img src="" alt="" />
          </a>
          <h2></h2>
          <p></p>
          <span></span>
          <div>
            Visualizar
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}

export default Projects;
