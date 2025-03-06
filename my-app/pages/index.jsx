import styles from "../styles/Home.module.css";

export default function Home() {
    return (
    <div className={styles.container}>
        <div className={styles.login}>
            <img src="/optionmonster-logo.png" alt="Logo"></img>
            <h1>Login</h1>
            <div className={styles.email}></div>
            <h1>Email Address</h1>
            <input type="text" id="taskInput" placeholder="Digite seu email"></input>
            <h1>Password</h1>
            <div className={styles.password}></div>
            <input type="text" id="taskInput" placeholder="Digite sua senha"></input>
    </div>
    </div>
    );
}
