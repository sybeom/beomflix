import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../Movie.module.css"

function Movie({ id, imgPath, title, summary, genres }) {
  const imageUrl = `https://image.tmdb.org/t/p/w342${imgPath}`
  const movie_title = title.length > 15 ? title.slice(0, 15) + "..." : title;
  return (
      <div className={styles.movie}>
        <Link to={`/movie/${id}`}>
          <img src={imageUrl} alt={title}
            style={{
                width: "300px",
                height: "400px"
              }} 
          />
        </Link>
        <div className={styles[`movie-info`]}>
          <h3 className={styles[`card-title`]}>{movie_title}</h3>
          <div>8.5/10</div>
        </div>
      </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    // coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.number).isRequired,
  };

export default Movie;   