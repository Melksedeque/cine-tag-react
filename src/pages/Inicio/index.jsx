import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import Cards from "@/components/Cards";

export default function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="Home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes</h1>
      </Titulo>
      <Cards />
      <Rodape />
    </>
  );
}
