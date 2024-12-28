import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../Detail.module.css"

function Detail() {
    const movie_param = useParams();
    let imgPath = "";
    const [imgUrl, setImgUrl] = useState();
    const getMovie = () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmVlZjY1MTM4MTBmMTRmYmJjMzljNTQ1MzIzNzkxZSIsIm5iZiI6MTcyMTQ2MzI3OS44MzM5OTk5LCJzdWIiOiI2NjliNzFlZjU1N2QxMjJlODUxODFmYjUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xCyd-F_0snlSKX3t4LgkZ4yL55lY-r_bVUKNP5SoxhI'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/movie/${movie_param.id}/images`, options)
        .then(res => res.json())
        .then(res => {
          console.log(res)
          imgPath = res.backdrops[3].file_path;
          setImgUrl(`https://image.tmdb.org/t/p/original${imgPath}`);
        })
        .catch(err => console.error(err));
    };
    useEffect(() => {
      getMovie();
    }, []);
    return (
      <div className={styles[`detail-body-container`]}>
        <div className={styles[`contents`]}>
          <img src={imgUrl}></img>
        </div>
        <div>
          ABCDEFG
        </div>
      </div>
    );
  }
  export default Detail;