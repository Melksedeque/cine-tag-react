import styles from "./Player.module.css";
import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import Container from "@/components/Container";
import NaoEncontrada from "pages/NaoEncontrada";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Player() {
  const [video, setVideo] = useState();
  const parametros = useParams();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/Melksedeque/cine-tag-react/videos?id=${parametros.id}`
    )
      .then((res) => res.json())
      .then((dados) => setVideo(...dados));
  }, []);

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
          className={styles.player}
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
