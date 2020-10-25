import styles from "../styles/components/Button.module.scss";

const Button = ({ children, onClick }) => (
  <button className={styles.Button} onClick={onClick}>
    {children}
  </button>
);

export default Button;
