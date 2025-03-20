"use client"

import styles from "../../styles/Conteudo.module.css";
import { useState } from "react";


export default function Conteudo() {

    return (
        <div className={styles.container}>
            <div className={styles.conteudo}>
                <h3>Welcome to My Profile</h3>
                <h4>I am Anna Beatriz</h4>
                <img src="/foto.png" alt="Foto"></img>
                    
            </div>
            <div className={styles.sobremim}>
                <h1>Sobre mim:</h1>
                <p>Me chamo Anna Beatriz, tenho 17 anos e hoje estou estudando na Rede Sesi e Senai em Valinhos - SP. NA rede Sesi estou no 3° ano do Ensino Médio, no meu último ano. Na Rede Senai estou no técnino de Desenvolvimento de Sistemas.</p>
            </div>
                <div className={styles.gostos}>
                <h1>Gostos:</h1>
                <p>Gosto de ler, de escrever, de fazer coisas divertidas e de conhecer pessoas novas. Gosto de aprender coisas novas e de me divertir.</p>
                </div>
            <div className={styles.language}>
                <h1>Linguagens e Tecnologias:</h1>
            </div>
            <div className={styles.card1}>
                <div className={styles.icon1}>
                    <img src="/iconvsco.png" alt="vscode"></img>
                </div> 
                <div className={styles.icon2}>
                    <img src="/iconreact.png" alt="react"></img>
                </div>
                <div className={styles.icon3}>
                    <img src="/iconmiro.png" alt="miro"></img>
                </div>
                <div className={styles.icon4}>
                    <img src="/iconjs.png" alt="js"></img>
                </div>  
            </div>
            <div className={styles.card2}>
                <div className={styles.icon5}>
                    <img src="/iconhtml.png" alt="html"></img>
                </div> 
                <div className={styles.icon6}>
                    <img src="/icongithub.png" alt="github"></img>
                </div>
                <div className={styles.icon7}>
                    <img src="/iconfigma.png" alt="figma"></img>
                </div>
                <div className={styles.icon8}>
                    <img src="/iconcss.png" alt="css"></img>
                </div>  
            </div>
            
            <div className={styles.footer}>
                <h4>© 2025 Option Monster By Anna Beatriz</h4>
            </div>
            <div className={styles.info}>
                <p>Thank you for visiting My Profile <a href="/signin">To go back</a></p>
            </div>
        </div>
        );
}