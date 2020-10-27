import styles from "../styles/components/Button.module.scss";
// console.log(`${styles.Button} ${style && styles[`Button--${style}`]}`);
const Button = ({ children, onClick, style }) => (
  <button
    // className={styles.ButtonBrand}
    // className={styles[`Button${style}`]}
    className={`${styles.Button} ${style && styles[`Button--${style}`]}`}
    // className={styles["ButtonBrand"]}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;