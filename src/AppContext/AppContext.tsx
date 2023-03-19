import { createContext, useState, useContext, ReactNode } from "react";
import { useParams } from "react-router-dom";

interface AppContext {
  change: () => void;
  visible: boolean;
  fetchCartItems: () => Promise<void>;
  cartItems: CartItemType[];
}

interface ProductType {
  id: number;
  title: string;
  price: number;
}

type CartItemType = {
  id: number;
  products: ProductType[];
  discountPercentage: number;
  discountedPrice: number;
  discountedTotal: number;
  price: number;
  title: string;
};

export const AppContext = createContext<AppContext | undefined>(undefined);

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [visible, setVisible] = useState(true);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const handleToggle = () => {
    setVisible(!visible);
  };

  const fetchCartItems = async () => {
    try {
      const res = await fetch("https://dummyjson.com/carts");
      const data = await res.json();
      setCartItems(data.carts);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        change: handleToggle,
        visible,
        fetchCartItems,
        cartItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("Not wrapped in app context");
  }
  return ctx;
};
