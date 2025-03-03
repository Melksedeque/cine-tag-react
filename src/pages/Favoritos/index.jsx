import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import Cards from "@/components/Cards";
import Card from "@/components/Cards/Card";
import { useFavoritosContext } from "@/contexts/Favoritos";

export default function Favoritos() {
  const { favorito } = useFavoritosContext();
  return (
    <>
      <Banner imagem="Favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <Cards>
        {favorito &&
          favorito.map((fav) => {
            return <Card {...fav} key={fav.id} />;
          })}
      </Cards>
    </>
  );
}
