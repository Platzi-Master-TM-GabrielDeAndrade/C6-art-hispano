import styles from  "../styles/components/Input.module.scss";

const Input = ({ name, placeholder, type, onChange }) => (
  <div>
    <input
      className={styles.Input}
      name={name}
      type={type}
      placeholder={placeholder}
      // onChange={(e) => handleChange(e.target.name, e.target.value)}
      onChange={(e) => onChange(e)}
    />
  </div>
);

export default Input;
