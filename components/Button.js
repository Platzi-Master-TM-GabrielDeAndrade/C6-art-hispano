import styles from "../styles/components/Button.module.scss";

const Button = ({ children, title, onClick, style, disabled = false }) => (
  <button
    // className={styles[`Button${style}`]}    
    className={`${styles.Button} ${style && styles[`Button${style}`]}`}
    onClick={onClick}
    disabled={disabled}
    title={title}
  >
    {children}
  </button>
);

export default Button;