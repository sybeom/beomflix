import { useEffect } from "react";
import styles from "../MovieListCard.module.css";

function getMovieAPI() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmVlZjY1MTM4MTBmMTRmYmJjMzljNTQ1MzIzNzkxZSIsIm5iZiI6MTcyMTQ2MzI3OS44MzM5OTk5LCJzdWIiOiI2NjliNzFlZjU1N2QxMjJlODUxODFmYjUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xCyd-F_0snlSKX3t4LgkZ4yL55lY-r_bVUKNP5SoxhI'
    }
  };
  
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&vote_average.gte=2.5', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));
}

function MovieListCard({ id, coverImg, title, summary, genres, test }) {
  useEffect(getMovieAPI, []);

  return (<>
  <div className={styles[`card-container`]}>
      <img className={styles.image} src={coverImg} alt={title}/>
  </div>
  </>)
}

export default MovieListCard;