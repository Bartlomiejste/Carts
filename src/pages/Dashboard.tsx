import { Box } from "@mui/material";
import { useEffect, useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
import BasicMenu from "../Components/BasicMenu/BasicMenu";
import Header from "../Components/Header/Header";
import CircularProgressWithLabel from "../Components/CircularProgressWithLabel/CircularProgressWithLabel";
import Carts from "../Components/Carts/Carts";

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
  price: number;
  title: string;
};

const App = () => {
  const { visible, fetchCartItems, cartItems } = useContext<any>(AppContext);

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <Box
      sx={{
        margin: visible ? "7% 0 0 13%" : "7% 0 0 8%",
        transition: ".3s linear",
      }}
    >
      <BasicMenu />
      <Header />
      <Carts />
      <h1>Lista produktów w koszyku</h1>
      {cartItems && cartItems.length > 0 ? (
        <ul>
          {cartItems.map((cartItem: CartItemType) => (
            <li key={cartItem.id}>
              Koszyk nr {cartItem.id}
              {cartItem.products.map((product: ProductType) => (
                <p key={product.id}>{product.title}</p>
              ))}
            </li>
          ))}
        </ul>
      ) : (
        <CircularProgressWithLabel />
      )}
    </Box>
  );
};

export default App;
