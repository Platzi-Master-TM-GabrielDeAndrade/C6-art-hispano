import styles from "../styles/components/Button.module.scss";

const Button = ({ onClick }) => (
  <button 
    onClick={onClick}
    className={styles.Button}
  />
);

export default Button;
