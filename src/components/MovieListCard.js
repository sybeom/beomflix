import { useEffect } from "react";
import styles from "../MovieListCard.module.css";

function MovieListCard({ id, imgPath, title, summary, genres }) {
  const imageUrl = `https://image.tmdb.org/t/p/w342${imgPath}`

  return (<>
    <div className={styles[`card-container`]}>
        <img className={styles.image} src={imageUrl} alt={title}/>
    </div>
  </>)
}

export default MovieListCard;