"use client"

import styles from "../../styles/Password.module.css";
import { useState } from "react";


export default function Home() {

    return (
        <div className={styles.container}>
            <div className={styles.img}>
            <img src="/optionmonster-logo.png" alt="Logo"></img>
            </div>
        <h1>Reset Password</h1>
        <p>Enter your email address below to reset your OptinMonster account password.</p>
        <div className={styles.email}>
            <p>Email Address:</p>
            <input type="text" id="taskInput" placeholder="Digite seu email" ></input>
            </div>
            <div className={styles.logincontainer}>
            <button className={styles.loginbutton}>Reset Password</button>
            <div className={styles.footer}>
                <div className={styles.information}>
                <p><a href="/signin">Retorn to Login</a></p>
                <h4>Copyright © 2023 OptinMonster By <a href="/conteudo">Anna Beatriz</a></h4>
                </div>
            </div>
            </div>
        </div>
        );
    }
