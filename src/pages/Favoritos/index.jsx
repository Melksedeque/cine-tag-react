import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import Cards from "@/components/Cards";
import Card from "@/components/Cards/Card";
import { useFavoritosContext } from "@/contexts/Favoritos";

export default function Favoritos() {
  const { favoritos } = useFavoritosContext();
  return (
    <>
      <Banner imagem="Favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <Cards>
        {favoritos &&
          favoritos.map((fav) => {
            return <Card {...fav} key={fav.id} />;
          })}
      </Cards>
    </>
  );
}
