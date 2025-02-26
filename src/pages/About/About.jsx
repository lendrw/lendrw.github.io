import styles from './About.module.css';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';

const About = () => {
  return (
    <div 
      className={`container ${styles.about}`}
      id='about'>
      <h1>Sobre mim</h1>
      <AnimatedSection id='about' className={styles.animatedSection}> 
        <p>Sou um desenvolvedor front-end com experiência em React.js, 
          JavaScript, Styled Components e consumo de APIs. Formado em 
          Sistemas de Informação pela UFERSA, tenho como objetivo transmitir 
          experiências agradáveis para os usuários. Sou um profissional 
          autodidata, estou sempre buscando melhorar minhas habilidades 
          e aprender novas tecnologias.</p>
      </AnimatedSection>
    </div>
  );
};

export default About;