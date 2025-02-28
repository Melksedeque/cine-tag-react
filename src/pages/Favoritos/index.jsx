import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import Cards from "@/components/Cards";

export default function Favoritos() {
  return (
    <>
      <Banner imagem="Favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <Cards />
    </>
  );
}
