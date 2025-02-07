import styles from './LightDark.module.css';
import { Icon } from '@iconify/react';
import sunIcon from '@iconify-icons/feather/sun';
import moonIcon from '@iconify-icons/feather/moon';

const LightDark = () => {
  return (
    <label className={styles.light_dark}>
      <input type="checkbox" className={styles.toggle_checkbox} />
      <div className={styles.toggle_slot}>
        <div className={styles.sun_icon_wrapper}>
          <Icon icon={sunIcon} className={styles.sun_icon} />
        </div>
        <div className={styles.toggle_button}></div>
        <div className={styles.moon_icon_wrapper}>
          <Icon icon={moonIcon} className={styles.moon_icon} />
        </div>
      </div>
    </label>
  );
};

export default LightDark;
