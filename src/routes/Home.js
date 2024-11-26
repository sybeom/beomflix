import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";
import Header from "../components/Header";
import styles from "../Home.module.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
      const json = await (
        await fetch(
          `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
        )
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
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
                    <div className={styles[`realtime-title`]}>실시간 인기 영화</div>
                    <Link to={`/movielist/`} className={styles[`more-movie`]}> 더 보기 </Link>
                  </div>
                  <div className={styles[`slider-track`]}>
                    {movies.map((movie) => (
                      <Movie
                        key={movie.id}
                        id={movie.id}
                        coverImg={movie.medium_cover_image}
                        title={movie.title}
                        // summary={movie.summary}
                        genres={movie.genres}
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