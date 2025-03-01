import { createContext, useState } from "react";

export const FavoritosContext = createContext({
  favoritos: [],
  adicionarFavorito: () => {},
  removerFavorito: () => {},
});

FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  const adicionarFavorito = (item) => {
    setFavoritos([...favoritos, item]);
  };

  const removerFavorito = (item) => {
    setFavoritos(favoritos.filter((fav) => fav.id !== item.id));
  };

  return (
    <FavoritosContext.Provider
      value={{ favoritos, adicionarFavorito, removerFavorito }}
    >
      {children}
    </FavoritosContext.Provider>
  );
}
