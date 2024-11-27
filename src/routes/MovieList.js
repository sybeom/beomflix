import { useEffect, useState } from "react";
import styles from "../MovieList.module.css";
import Header from "../components/Header";
import MovieListCard from "../components/MovieListCard";

function MovieList() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (
          await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0`
          )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
      };
    useEffect(() => {
        getMovies();
    }, []);
    console.log(movies);
    return (
    <>
    {loading ? (
          <div className={styles.loading}>
            <h1>Loading...</h1>
          </div>
        ) : (<>
                <Header page={"MovieList"}/>
                <div className={styles.container}>
                    <div className={styles[`list-header`]}>
                        <select className={styles.sort}>
                            <option className={styles[`option-priority`]}>
                                평점 높은 순
                            </option>
                            <option className={styles[`option-priority`]}>
                                이름 순
                            </option>
                            <option className={styles[`option-priority`]}>
                                최신 순
                            </option>
                        </select>
                    </div>
                    <div className={styles[`movie-list-container`]}>
                        {
                            movies.map(movie => (
                                <MovieListCard
                                    key={movie.id}
                                    id={movie.id}
                                    coverImg={movie.medium_cover_image}
                                    title={movie.title}
                                    summary={movie.summary}
                                    genres={movie.genres}
                                />
                            ))
                        }
                    </div>
                </div>
            </>
        )}
    </>
    );
}

export default MovieList;