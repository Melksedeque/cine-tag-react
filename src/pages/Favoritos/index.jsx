import styles from "./Favoritos.module.css";
import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import Cards from "@/components/Cards";

export default function Favoritos() {
  return (
    <>
      <Banner imagem="Favoritos" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes</h1>
      </Titulo>
      <Cards />
    </>
  );
}
