import { Link } from "react-router-dom";
import styles from "../Header.module.css";

function Header({page}) {
    console.log(page);
    if(page == "MovieList") {
        return (
            <div className={styles[`header-container`]}>
            <Link to={`/`}><h1>BEOMFLIX</h1></Link> 
            </div>  
        )
    } else if(page == "Home") {
        return (
        <Link to={`/`}>
            <div className={styles[`header-container`]}>
                <h1>BEOMFLIX</h1>
                <div className={styles[`sign-container`]}>
                    <div className={styles.sign}>로그인</div>
                    <div className={styles.sign}>회원가입</div>
                </div>
            </div>  
        </Link>
        )
    }
}

export default Header