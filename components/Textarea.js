import styles from "../styles/components/Textarea.module.scss";

const Textarea = ({ name, placeholder, onChange }) => (
  <div>
    <textarea
      className={styles.Textarea}
      name={name}
      // type={type}
      placeholder={placeholder}
      // cols={cols}
      // rows={rows}
      // onChange={(e) => handleChange(e.target.name, e.target.value)}
      onChange={(e) => onChange(e)}
    />
  </div>
);

export default Textarea;
