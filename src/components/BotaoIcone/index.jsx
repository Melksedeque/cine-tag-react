import styles from './BotaoIcone.module.css';

export default function BotaoIcone(src, alt) {
    return (
        <button className={styles.botaoIcone}>
            <img src={src} alt={alt} />
        </button>
    )
}