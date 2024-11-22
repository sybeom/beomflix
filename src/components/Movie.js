import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../Movie.module.css"

function Movie({ id, coverImg, title, summary, genres }) {

  return (
      <div className={styles.movie}>
        <Link to={`/movie/${id}`}>
          <img src={coverImg} alt={title}
            style={
              {
                width: "300px",
                height: "400px"
              }
            } 
          />
        </Link>
        
        <p>rsef</p>  
        <ul
          style={
            {
              color: "tomato",
              fontSize: "30px"  
            }
          }
        >
          {/* {genres.map((g) => (
            <li key={g}>{g}</li>
          ))} */}
        </ul>
      </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default Movie;   