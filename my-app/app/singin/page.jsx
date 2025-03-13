"use client"


import { useState } from "react";


export default function Home() {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [match, setMatch] = useState(false);

    const handleCheck = () => {
        setMatch (input1 === input2 && input1 !== "");
    };

    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <img src="/optionmonster-logo.png" alt="Logo"></img>
                <h1>Login In</h1>
                <p>Don't have an account? <a href="/singup">Create an account</a></p>
            </div>
            <div className={styles.email}>
                <p>Email Address:</p>
                <input type="text" id="taskInput" placeholder="Digite seu email" value={input1} onChange={(e) => setInput1(e.target.value)}></input>
            </div>
            <div className={styles.password}>
                <p>Password:</p>
                <input type="text" id="taskInput" placeholder="Digite sua senha" value={input2} onChange={(e) => setInput2(e.target.value)}></input>
            </div>
            <div className={styles.logincontainer}>
            <button className={styles.loginbutton}>Log In</button>
                <a href="#" className="information">Forgot your password?</a>
            </div>
            <div className={styles.footer}>
                <h4>© 2021 Option Monster</h4>
            </div>
            <div className={styles.monster}>
                <img src="/monster.png" alt="Monster"></img>
            </div>
        </div>
    );
}