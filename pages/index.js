import styles from "../styles/pages/Index.module.scss";

export default function Home () {
  return (
    <>
    <div className = {styles.slider}>
        <ul>
          <li><img src="home.jpg "alt="arte" width= "100%"/></li>
        </ul>
      <hr/>
        
    </div>
    </>
  );
};