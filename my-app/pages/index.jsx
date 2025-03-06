import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <img src="/optionmonster-logo.png" alt="Logo"></img>
                <h1>Login</h1>
            </div>
            <div className={styles.email}>
                <p>Email Address</p>
                <input type="text" id="taskInput" placeholder="Digite seu email"></input>
            </div>
            <div className={styles.password}>
                <p>Password</p>
                <input type="text" id="taskInput" placeholder="Digite sua senha"></input>
            </div>

        </div>
    );
}
