import { useEffect, useState } from "react";
import styles from "../MovieList.module.css";
import Header from "../components/Header";
import MovieListCard from "../components/MovieListCard";

// 페이지 끝 감지, 결과 로드
function detectEnd() {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20) {
        console.log("scrollTop : " + scrollTop);
    }
}

// 결과 로드
async function loadMoreResults() {

}

function MovieList() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&vote_average.gte=2.5';
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
    
    // 스크롤 이벤트
    window.addEventListener('scroll', detectEnd);
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