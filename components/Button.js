import styles from "../styles/components/Button.module.scss";

const Button = ({ children, onClick, param }) => (
  <button
    // if (onClick === "Google") {

    // } elseif (onClick === "Google") {

    // } else {

    // }

    className={param ? styles.Button : styles.ButtonGoogle}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
