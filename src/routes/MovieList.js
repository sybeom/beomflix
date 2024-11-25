import styles from "../MovieList.module.css"

function MovieList() {
    return (
    <div className={styles.container}>
        <div className={styles[`list-header`]}>
            <select className={styles.order}>
                <option className={styles[`option-priority`]}>
                    평점 높은 순
                </option>
                <option className={styles[`option-priority`]}>
                    이름 순
                </option>
                <option className={styles[`option-priority`]}>
                    최근 개봉 순
                </option>
            </select>
        </div>
        <div className={styles[`movie-list`]}>
            asdsad
        </div>
    </div>
    )
}

export default MovieList;