import styles from "./Player.module.css";
import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import videos from "@/json/db.json";
import Container from "@/components/Container";
import NaoEncontrada from "pages/NaoEncontrada";
import { useParams } from "react-router-dom";

export default function Player() {
  const parametros = useParams();
  const video = videos.find((video) => video.id === Number(parametros.id));

  if (!video) {
    return <NaoEncontrada />;
  }

  return (
    <>
      <Banner imagem="Player" />
      <Titulo>
        <h1>{video.titulo}</h1>
      </Titulo>
      <Container>
        <iframe
          width="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Container>
    </>
  );
}
