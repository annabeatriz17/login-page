"use client"

import styles from "../../styles/Signin.module.css";
import { useState } from "react";


export default function Home() {

    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <img src="/optionmonster-logo.png" alt="Logo"></img>
                <h1>Login In</h1>
                <p>Don't have an account? <a href="/singup">Create an account</a></p>
            </div>
            <div className={styles.email}>
                <p>Email Address:</p>
                <input type="text" id="taskInput" placeholder="Digite seu email" ></input>
            </div>
            <div className={styles.password}>
                <p>Password:</p>
                <input type="text" id="taskInput" placeholder="Digite sua senha"></input>
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