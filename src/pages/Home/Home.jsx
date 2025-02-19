import styles from './Home.module.css';
import backGround from '../../assets/img/dev_background.png';

const Home = () => {
  return (
    <div 
      className={`container ${styles.home}`} 
      style={{ 
        backgroundImage: `url(${backGround})`}}
    >
      home
    </div>
  );
};

export default Home;
