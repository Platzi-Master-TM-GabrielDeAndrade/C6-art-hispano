import styles from "../styles/components/Label.module.scss";

const Label = ({ text }) => {
  
  return (
    <div>
      <label className={styles.Label}>{text}</label>
    </div>
  );
};

export default Label;
