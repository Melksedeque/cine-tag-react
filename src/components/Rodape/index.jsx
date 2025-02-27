import styles from "./Rodape.module.css";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <p>Desenvolvido por <a href="http://github.com/Melksedeque" target="_blank">Melksedeque</a>.</p>
      <p>Designed by Alura.</p>
    </footer>
  );
}
