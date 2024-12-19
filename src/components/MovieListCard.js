import { useEffect } from "react";
import styles from "../MovieListCard.module.css";
import { Link } from "react-router-dom";

function MovieListCard({ id, imgPath, title, summary, genres }) {
  const imageUrl = `https://image.tmdb.org/t/p/w342${imgPath}`

  return (<>
  <Link to={`/movie/${id}`}>
    <div className={styles[`card-container`]}>
        <img className={styles.image} src={imageUrl} alt={title}/>
    </div>
  </Link>
  </>)
}

export default MovieListCard;