import { useEffect, useRef, useState } from "react";
import styles from "../MovieList.module.css";
import Header from "../components/Header";
import MovieListCard from "../components/MovieListCard";

const getOptions = () => ({
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmVlZjY1MTM4MTBmMTRmYmJjMzljNTQ1MzIzNzkxZSIsIm5iZiI6MTcyMTQ2MzI3OS44MzM5OTk5LCJzdWIiOiI2NjliNzFlZjU1N2QxMjJlODUxODFmYjUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xCyd-F_0snlSKX3t4LgkZ4yL55lY-r_bVUKNP5SoxhI'
    }
})

function MovieList() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const loadingPage = useRef(false);
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&vote_average.gte=2.5`;
    const getMovies = () => {
        fetch(url, getOptions())
            .then(res => res.json())
            .then(res => {
                setMovies(res.results);
                setLoading(false);
                setPage((prev) => prev+1);
                console.log("최초 로드 res",res);
        }).catch(err => console.error(err));
    };

    useEffect(() => {
        getMovies();
    }, []);

    // 스크롤 최하단시 추가 영화 목록 불러오기
    const handleScroll = (event) => {
        const element= event.target
        const { scrollTop, clientHeight, scrollHeight } = element;
        if (scrollTop + clientHeight >= scrollHeight - 5) {
            if (loadingPage.current) 
                return;

            // const nextPage = page;
            console.log("로드될 페이지", page);

            loadingPage.current = true
            fetch(url, getOptions())
                .then(res => res.json())
                .then(res => {
                    setMovies((curMovies) => [...curMovies, ...res.results]); // 현재 영화 목록에 불러온 영화목록 추가가
                    loadingPage.current = false
                    setPage(prev => prev+1); // 페이지 값 증가
            }).catch(err => {
            console.error(err)
            loadingPage.current = false
            });    
        }
    }

    return (
    <>
    {loading ? (
          <div className={styles.loading}>
            <h1>Loading...</h1>
          </div>
        ) : (<>
                <div className={styles[`movielist-body-container`]} onScroll={handleScroll}>
                    <Header page={"MovieList"}/>
                    <div className={styles[`contents-container`]}>
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
                </div>
            </>
        )}
    </> 
    );
}

export default MovieList;