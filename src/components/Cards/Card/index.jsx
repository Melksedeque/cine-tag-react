import { useFavoritosContext } from "@/contexts/Favoritos";
import BotaoIcone from "@/components/BotaoIcone";
import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./desfavoritar.png";

export default function Card({ id, titulo, capa }) {
  const { favorito, manipularFavorito } = useFavoritosContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icone = ehFavorito ? iconeDesfavoritar : iconeFavoritar;

  return (
    <figure key={id} className={styles.card}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <figcaption className={styles.titulo}>{titulo}</figcaption>
      <BotaoIcone
        src={icone}
        alt="Favoritar filme"
        className={styles.favoritar}
        onClick={() => { manipularFavorito({ id, titulo, capa }); }} />
    </figure>
  );
}
