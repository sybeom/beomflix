import { useEffect, useState } from "react";
import styles from "../MovieList.module.css";
import Header from "../components/Header";
import MovieListCard from "../components/MovieListCard";

function getOptions() {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmVlZjY1MTM4MTBmMTRmYmJjMzljNTQ1MzIzNzkxZSIsIm5iZiI6MTcyMTQ2MzI3OS44MzM5OTk5LCJzdWIiOiI2NjliNzFlZjU1N2QxMjJlODUxODFmYjUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xCyd-F_0snlSKX3t4LgkZ4yL55lY-r_bVUKNP5SoxhI'
        }
      };
}

function MovieList() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&vote_average.gte=2.5`;
    const getMovies = () => {
        fetch(url, getOptions)
            .then(res => res.json())
            .then(res => {
                setMovies(res.results);
                setLoading(false);
                setPage((prev) => prev+1);
        }).catch(err => console.error(err));
    };

    useEffect(() => {
        getMovies();
    }, []);

    // 페이지 끝 감지 및 다음 페이지 로드
    useEffect(() => {
        const loadNextPage = () => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 20) {
                const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&vote_average.gte=2.5`;
                fetch(url, getOptions)
                    .then(res => res.json())
                    .then(res => {
                        setMovies((curMovies) => [...curMovies, ...res.results]);
                        setLoading(false);
                        setPage(prev => prev+1);
                }).catch(err => console.error(err));
                
            }
        }
        window.addEventListener('scroll', loadNextPage);
        return () => window.removeEventListener('scroll', loadNextPage);
    }, [page]);

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
                        {/* { console.log(movies) } */}
                        {
                            movies.map((movie, idx) => (
                                <MovieListCard
                                    key={idx}
                                    id={movie.id}
                                    imgPath={movie.poster_path}
                                    title={movie.title}
                                    summary={movie.overview}
                                    genres={movie.genre_ids}
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