import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext({
  favorito: [],
  manipularFavorito: () => {},
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

  function manipularFavorito(novoFavorito) {
    const temFavorito = favorito.some((item) => item.id === novoFavorito.id);

    let novaLista = [...favorito];

    if (!temFavorito) {
      novaLista.push(novoFavorito);
      return setFavorito(novaLista);
    } else {
      novaLista = favorito.filter((item) => item.id !== novoFavorito.id);
    }

    return setFavorito(novaLista);
  }

  return {
    favorito,
    manipularFavorito,
  };
}
