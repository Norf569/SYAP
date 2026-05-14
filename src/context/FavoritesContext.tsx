import { createContext, useContext, useState, ReactNode } from "react";

interface FavItem {
  id: number;
  img: string;
  title: string;
  author: string;
  price: number;
}

interface FavContextType {
  favourites: FavItem[];
  toggleFavourite: (item: FavItem) => void;
  isFavourite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavContextType | null>(null);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favourites, setFavourites] = useState<FavItem[]>([]);

  const toggleFavourite = (item: FavItem) => {
    setFavourites((prev) => {
      const exists = prev.find((f) => f.id === item.id);
      if (exists) {
        return prev.filter((f) => f.id !== item.id);
      }
      return [...prev, item];
    });
  };

  const isFavourite = (id: number) => {
    return favourites.some((f) => f.id === id);
  };

  return (
    <FavoritesContext.Provider value={{ favourites, toggleFavourite, isFavourite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavourites = () => {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavourites must be used inside FavoritesProvider");
  return ctx;
};
