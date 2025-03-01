import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import Cards from "@/components/Cards";
import Card from "@/components/Cards/Card";
import videos from "@/json/db.json";

export default function Inicio() {
  return (
    <>
      <Banner imagem="Home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes</h1>
      </Titulo>
      <Cards>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </Cards>
    </>
  );
}
