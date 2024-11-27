import styles from "../MovieListCard.module.css";

function MovieListCard({ id, coverImg, title, summary, genres }) {
    return (<>
    <div className={styles[`card-container`]}>
        <img className={styles.image} src={coverImg} alt={title}/>
    </div>
    </>)
}

export default MovieListCard;