import styles from "../Header.module.css";

function Header() {
    return (
        <div className={styles[`header-container`]}>
            <h1>BEOMFLIX</h1>
            <div className={styles[`sign-container`]}>
                <div className={styles.sign}>로그인</div>
                <div className={styles.sign}>회원가입</div>
            </div>
        </div>
    )
}

export default Header