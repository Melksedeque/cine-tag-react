import Titulo from "@/components/Titulo";
import Container from "@/components/Container";

export default function NaoEncontrada() {
  return (
    <div>
      <Container>
        <Titulo>
          <h1>Erro 404</h1>
        </Titulo>
        <Titulo>
          <h2>Ops!</h2>
        </Titulo>
        <p>Página não encontrada</p>
        <p>O conteúdo que você procura não foi encontrado</p>
      </Container>
    </div>
  );
}
