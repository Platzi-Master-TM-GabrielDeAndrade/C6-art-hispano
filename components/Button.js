import styles from "../styles/components/Button.module.scss";

const Button = ({ children, onClick, style }) => (
  <button
    // className={styles.ButtonBrand}
    className={ styles[`Button ${style}`] }    
    // className={styles["ButtonBrand"]}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;