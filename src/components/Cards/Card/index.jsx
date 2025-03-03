import { useFavoritosContext } from "@/contexts/Favoritos";
import BotaoIcone from "@/components/BotaoIcone";
import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./desfavoritar.png";
import { Link } from "react-router-dom";

export default function Card({ id, titulo, capa }) {
  const { favorito, manipularFavorito } = useFavoritosContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icone = ehFavorito ? iconeDesfavoritar : iconeFavoritar;

  return (
    <figure key={id} className={styles.card}>
      <Link className={styles.link} to={`/player/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <figcaption className={styles.titulo}>{titulo}</figcaption>
      </Link>
      <BotaoIcone
        src={icone}
        alt="Favoritar filme"
        className={styles.favoritar}
        onClick={() => {
          manipularFavorito({ id, titulo, capa });
        }}
      />
    </figure>
  );
}
