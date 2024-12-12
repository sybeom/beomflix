import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../Detail.module.css"

function Detail() {
    const movie_id = useParams();
    let imgPath = "";
    const [imgUrl, setImgUrl] = useState();
    let width = 0;
    const getMovie = () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmVlZjY1MTM4MTBmMTRmYmJjMzljNTQ1MzIzNzkxZSIsIm5iZiI6MTcyMTQ2MzI3OS44MzM5OTk5LCJzdWIiOiI2NjliNzFlZjU1N2QxMjJlODUxODFmYjUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xCyd-F_0snlSKX3t4LgkZ4yL55lY-r_bVUKNP5SoxhI'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/movie/${movie_id.id}/images`, options)
        .then(res => res.json())
        .then(res => {
          console.log(res)
          imgPath = res.backdrops[0].file_path;
          width = res.backdrops[0].width;
          setImgUrl(`https://image.tmdb.org/t/p/w${width}${imgPath}`);
          console.log(imgUrl);
        })
        .catch(err => console.error(err));
    };
    useEffect(() => {
      getMovie();
    }, []);
    return (
      <div className={styles[`detail-container`]}>
        <img src={imgUrl}></img>
      </div>
    );
  }
  export default Detail;