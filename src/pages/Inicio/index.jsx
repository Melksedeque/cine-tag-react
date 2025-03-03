import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import Cards from "@/components/Cards";
import Card from "@/components/Cards/Card";
import { useEffect, useState } from "react";

export default function Inicio() {
  const [videos, setVideos] = useState();
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/Melksedeque/cine-tag-react/videos"
    )
      .then((res) => res.json())
      .then((dados) => setVideos(dados));
  }, []);
  return (
    <>
      <Banner imagem="Home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes</h1>
      </Titulo>
      <Cards>
        {videos &&
          videos.map((video) => {
            return <Card {...video} key={video.id} />;
          })}
      </Cards>
    </>
  );
}
