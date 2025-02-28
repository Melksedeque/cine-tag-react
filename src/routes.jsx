import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import Container from "@/components/Container";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </Container>
      <Rodape />
    </BrowserRouter>
  );
}
