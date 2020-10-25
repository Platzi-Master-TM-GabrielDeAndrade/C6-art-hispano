import styles from "../styles/components/Title.module.scss";

const Title = ({ text }) => {
  
  return (
    <div className={styles.TitleContainer}>
      <label className={styles.TitleLabel}>{text}</label>
    </div>
  );
};

export default Title;
