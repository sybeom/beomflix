import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../Detail.module.css"

function Detail() {
    const movie_param = useParams();
    let imgPath = "";
    const [imgUrl, setImgUrl] = useState();
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [country, setCountry] = useState("");
    const [runtime, setRuntime] = useState("");
    const [rate, setRate] = useState("");
    const [genres, setGenres] = useState([""]);
    const [overview, setOverview] = useState([""]);
    const getMovie = () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmVlZjY1MTM4MTBmMTRmYmJjMzljNTQ1MzIzNzkxZSIsIm5iZiI6MTcyMTQ2MzI3OS44MzM5OTk5LCJzdWIiOiI2NjliNzFlZjU1N2QxMjJlODUxODFmYjUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xCyd-F_0snlSKX3t4LgkZ4yL55lY-r_bVUKNP5SoxhI'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/movie/${movie_param.id}?language=en-US`, options)
        .then(res => res.json())
        .then(res => {
          console.log(res)
          imgPath = res.backdrop_path;
          setImgUrl(`https://image.tmdb.org/t/p/original${imgPath}`);
          setTitle(res.title);
          setDate(res.release_date);
          setCountry(res.origin_country);
          setRuntime(res.runtime);
          setRate(res.vote_average);
          setGenres(res.genres);
          setOverview(res.overview);
        })
        .catch(err => console.error(err));
    };
    useEffect(() => {
      getMovie();
    }, []);
    return (
      <div className={styles[`detail-body-container`]}>
        <div className={styles[`contents`]} style={{
          backgroundImage : `url(${imgUrl})`
        }}>
          {/* <img src={imgUrl}></img> */}
        </div>
        <div className={styles.info}>
          <div className={styles.title}>{title}</div>
          <span className={styles.date}>{date.split('-')[0]}</span>
          <span className={styles.runtime}>{runtime + "분"}</span>
          <span className={styles.country}>{country}</span>
          <span className={styles.rate}>{"⭐ " + rate}</span>
          <div className={styles[`genres-container`]}>
            {
              genres.map(genre => (<div className={styles.genre}>{genre.name}</div>))
            }
          </div>
          <div className={styles.overview}>
            <p>
              {overview}
            </p>
          </div>
        </div>
      </div>
    );
  }
  export default Detail;