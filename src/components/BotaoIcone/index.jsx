import styles from "./BotaoIcone.module.css";

export default function BotaoIcone({ src, alt, className, onClick }) {
  return (
    <button className={`${styles.botaoIcone} ${className}`} onClick={onClick}>
      <img src={src} alt={alt} />
    </button>
  );
}
