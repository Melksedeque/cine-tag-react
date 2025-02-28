import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./desfavoritar.png";

export default function Card({ id, titulo, capa }) {
  return (
    <figure key={id}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <figcaption>
        <h3>{titulo}</h3>
      </figcaption>
      <img
        src={iconeFavoritar}
        alt="Favoritar filme"
        className={styles.favoritar}
      />
    </figure>
  );
}
