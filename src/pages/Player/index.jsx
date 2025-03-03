import styles from "./Player.module.css";
import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import videos from "@/json/db.json";
import Container from "@/components/Container";
import { useParams } from "react-router-dom";

export default function Player() {
  const parametros = useParams();
  const video = videos.find((video) => video.id === Number(parametros.id));

  return (
    <>
      <Banner imagem="Player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <Container>
        <iframe
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
