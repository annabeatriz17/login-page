"use client"

import styles from "../../styles/Conteudo.module.css";
import { useState } from "react";


export default function Conteudo() {

    return (
        <div className={styles.container}>
            <div className={styles.conteudo}>
                <img src="/foto.png" alt="Foto"></img>
                <h1>Sobre mim</h1>
                <p>Me chamo Anna Beatriz, tenho 17 anos e hoje estou estudando na Rede Sesi e Senai em Valinhos - SP. NA rede Sesi estou no 3° ano do Ensino Médio, no meu último ano. Na Rede Senai estou no técnino de Desenvolvimento de Sistemas.</p>
                </div>
                <div className={styles.gostos}>
                <h1>Gostos</h1>
                <p>Gosto de ler, de escrever, de jogar, de fazer coisas divertidas e de conhecer pessoas novas. Gosto de aprender coisas novas e de se divertir.</p>
                </div>
            <div className={styles.information}>
                <p> Thank you for visiting my website </p>
            </div>
            <div className={styles.footer}>
                <h4>© 2025 Option Monster By Anna Beatriz</h4>
            </div>
            <div class
        </div>
    );
}