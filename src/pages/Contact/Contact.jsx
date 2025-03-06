import styles from './Contact.module.css';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div 
      className={`container ${styles.contact}`}
      id='contact'>
      <h1>Contatos</h1>
      <AnimatedSection id='contatos' className={styles.animatedSection}>
        <div className={styles.contatoContainer}>
          <a href="mailto:leandrocabral321@gmail.com" className={styles.contactLink}>
            <div>
              <div className={styles.iconBg}>
                <FaEnvelope className={styles.contactIcons}/>
              </div>
              <p>E-mail</p>
              <span>leandrocabral321@gmail.com</span>
            </div>
          </a>
          <a href="tel:+5584999917798" className={styles.contactLink}>
            <div>
              <div className={styles.iconBg}>
                <FaPhone className={styles.contactIcons}/>
              </div>
              <p>Telefone</p>
              <span>(84)9 9991-7798</span>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/leandro-cabral-2aab41205/" className={styles.contactLink}>
            <div>
              <div className={styles.iconBg}>
                <FaLinkedin className={styles.contactIcons}/>
              </div>
              <p>Linkedin</p>
              <span>@leandrocabral</span>
            </div>
          </a>
          <a href="https://github.com/lendrw" className={styles.contactLink}>
            <div>
              <div className={styles.iconBg}>
                <FaGithub className={styles.contactIcons}/>
              </div>
              <p>GitHub</p>
              <span>@lendrw</span>
            </div>
          </a>
        </div>
      </AnimatedSection>
    </div>
  )
}

export default Contact;
