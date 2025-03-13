import styles from "../styles/signup.module.css";

export default function Signup() {
    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <img src="/optionmonster-logo.png" alt="Logo"></img>
                <h1> Sign Up</h1>
                <p>Have an account? <a href="../pages/index.jsx">Log In</a></p>
                <div className={styles. email}>
                    <p>Email Address:</p>
                    <input type="text" id="taskInput" placeholder="Digite um email"></input>
                </div>
                <div className={styles.password}>
                    <p>Password:</p>
                    <input type="text" id="taskInput" placeholder="Crie uma senha"></input>
                </div>
                <div className={styles.logincontainer}>
                    <button className={styles.loginbutton}>Sign Up</button>
                    <a href="#" className="information">Forgot your password?</a>
                </div>
                <div className={styles.footer}>
                <h4>© 2021 Option Monster</h4>
                </div>
            </div>
        </div>
    );
}
    