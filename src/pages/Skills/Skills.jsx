import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaCloud } from 'react-icons/fa';
import { RiEnglishInput } from "react-icons/ri";
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';

import styles from './Skills.module.css';

const Skills = () => {
  return (
    <div className={`container ${styles.skills}`} id='skills'>
      <h1>Minhas Habilidades</h1>
      <AnimatedSection id='skills' className={styles.animatedSection}>
      <div className={styles.skillContainer}>
        <div>
          <div>
          <FaHtml5 className={styles.skillIcons}/>
          <p>HTML5</p>
          </div>
        </div>
        <div>
          <div>
          <FaCss3Alt className={styles.skillIcons}/>
          <p>CSS3</p>
          </div>
        </div>
        <div>
          <div>
          <FaJs className={styles.skillIcons}/>
          <p>JavaScript</p>
          </div>
        </div>
        <div>
          <div>
          <FaReact className={styles.skillIcons}/>
          <p>React.js</p>
          </div>
        </div>
        <div>
          <div>
          <FaCss3Alt className={styles.skillIcons}/>
          <p>CSS-in-JS</p>
          </div>
        </div>
        <div>
          <div>
          <FaGithub className={styles.skillIcons}/>
          <p>Git/GitHub</p>
          </div>
        </div>
        <div>
          <div>
          <FaCloud className={styles.skillIcons}/>
          <p>API RESTful</p>
          </div>
        </div>
        <div>
           <div>
           <RiEnglishInput className={styles.skillIcons}/>
           <p>Inglês intermediário</p>
           </div>
        </div>
      </div>
      </AnimatedSection>
    </div>
  );
};

export default Skills;
