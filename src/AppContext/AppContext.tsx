import { createContext, useState, useContext, ReactNode } from "react";

interface ApplicationContext {
  change: () => void;
  visible: boolean;
  fetchCartsItems: () => Promise<void>;
  cartItems: CartsType[];
}

export interface ProductsType {
  target: any;
  id: number;
  title: string;
  price: number;
  discountedPrice: number;
  discountPercentage: number;
  quantity: number;
  total: number;
}

export type CartsType = {
  id: number;
  products: ProductsType[];
  discountedTotal: number;
  total: number;
};

export const AppContext = createContext<ApplicationContext | undefined>(
  undefined
);

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [visible, setVisible] = useState(true);
  const [cartItems, setCartItems] = useState<CartsType[]>([]);

  const handleToggle = () => {
    setVisible(!visible);
  };

  const fetchCartsItems = async () => {
    try {
      const res = await fetch("https://dummyjson.com/carts");
      const data = await res.json();
      setCartItems(data.carts);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        change: handleToggle,
        visible,
        fetchCartsItems,
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
