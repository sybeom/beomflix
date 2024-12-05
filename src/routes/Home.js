import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";
import Header from "../components/Header";
import styles from "../Home.module.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&vote_average.gte=7';
    const getMovies = () => {
      const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmVlZjY1MTM4MTBmMTRmYmJjMzljNTQ1MzIzNzkxZSIsIm5iZiI6MTcyMTQ2MzI3OS44MzM5OTk5LCJzdWIiOiI2NjliNzFlZjU1N2QxMjJlODUxODFmYjUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xCyd-F_0snlSKX3t4LgkZ4yL55lY-r_bVUKNP5SoxhI'
          }
        };
        
      fetch(url, options)
          .then(res => res.json())
          .then(res => {
              setMovies(res.results);
              setLoading(false);
              console.log(res.results);
      }).catch(err => console.error(err));
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      {loading ? (
        <div className={styles.loading}>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className={styles[`home-body`]}>
          <Header page={"Home"}/>
            <div className={styles.contents}>
              <div className={styles[`realtime-container`]}>
                <div className={styles[`realtime-header`]}>
                  <div className={styles[`realtime-title`]}>실시간 추천 영화</div>
                  <Link to={`/movielist/`} className={styles[`more-movie`]}> 더 보기 </Link>
                </div>
                <div className={styles[`slider-track`]}>
                  {movies.map((movie) => (
                    <Movie
                      key={movie.id}
                      id={movie.id}
                      imgPath={movie.poster_path}
                      title={movie.title}
                      summary={movie.overview}
                      genres={movie.genre_ids}
                    />
                  ))}
                </div>
            </div>
          </div>
        </div>
      )}  
    </>
  );
}

  export default Home;