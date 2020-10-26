import styles from "../styles/components/Button.module.scss";

const Button = ({ children, onClick, style }) => (
  <button
    className={styles[`Button${style}`]}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;