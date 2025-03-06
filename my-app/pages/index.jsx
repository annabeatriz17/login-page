import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <img src="/optionmonster-logo.png" alt="Logo"></img>
                <h1>Login In</h1>
                <p>Don't have an account? <a>Create an account</a></p>
            </div>
            <div className={styles.email}>
                <p>Email Address:</p>
                <input type="text" id="taskInput" placeholder="Digite seu email"></input>
            </div>
            <div className={styles.password}>
                <p>Password:</p>
                <input type="text" id="taskInput" placeholder="Digite sua senha"></input>
            </div>
            <div className={styles.monster}>
                <img src="/monster.png" alt="Monster"></img>
                <button className={styles.button}>Login In</button>
                <div className={styles.information}>
                    <p>Forgot your password?</p>
                </div>
            </div>
            <div className={styles.footer}>
                <h4>© 2021 Option Monster</h4>
                <p>Terms of Service </p>
                <p>Privacy Policy</p>
            </div>
        </div>
    );
}
