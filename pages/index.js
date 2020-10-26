import styles from "../styles/pages/Index.module.scss";

export default function Home () {
  return (
    <>
    <div className = {styles.slider}>
        <ul>
          <li><img src="arte.jpg "alt="arte"  /></li>
          <li><img src="barro.jpg" alt=""/></li>
          <li><img src="" alt=""/></li>
        </ul>
      </div>          
    </>
  );
};