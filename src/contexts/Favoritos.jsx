import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext({
  favorito: [],
  adicionarFavorito: () => {},
  removerFavorito: () => {},
});

FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
  const [favorito, setFavorito] = useState([]);

  return (
    <FavoritosContext.Provider value={{ favorito, setFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritosContext() {
  const { favorito, setFavorito } = useContext(FavoritosContext);

  function adicionarFavorito(novoFavorito) {
    const temFavorito = favorito.some((item) => item.id === novoFavorito.id);

    let novaLista = [...favorito];

    if (!temFavorito) {
      novaLista.push(novoFavorito);
    }

    return setFavorito(novaLista);
  }

  function removerFavorito(id) {
    setFavorito(favorito.filter((item) => item.id !== id));
  }

  return {
    favorito,
    adicionarFavorito,
    removerFavorito,
  };
}
