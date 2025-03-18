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
                <a href="" className="information">Return to Login</a> <a href="/signin">Return to Login</a>
        </div>
        </div>
    )
}