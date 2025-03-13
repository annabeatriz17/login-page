import styles from "";
import { useRouter } from "next/router";

export default function Conteudo() {
    const router = useRouter();

    return (
        <div className={styles.conteudo}>
            <h1 className={styles.title1}>Sobre mim</h1>
            <p className={styles.paragraph}>Me chamo Anna Beatriz, tenho 17 anos e hoje estou estudando na Rede Sesi e Senai em Valinhos - SP. NA rede Sesi estou no 3° ano do Ensino Médio, no meu último ano. Na Rede Senai estou no técnino de Desenvolvimento de Sistemas.</p>
            <h3 className={styles.title}>Gostos</h3>
            <p className={styles.paragraph}></p>

            <h3 className={styles.title}>Interesses</h3>
            <p className={styles.paragraph}></p>
        </div>
    )}