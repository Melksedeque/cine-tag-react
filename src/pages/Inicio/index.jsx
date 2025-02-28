import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import Card from "@/components/Cards/Card";

export default function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="Home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes</h1>
      </Titulo>
      <Card
        id={1}
        titulo="Gatin"
        capa="https://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gato.jpg"
      />
      <Rodape />
    </>
  );
}
