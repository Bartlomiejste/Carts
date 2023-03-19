import { Box } from "@mui/material";
import { useEffect, useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
import BasicMenu from "../Components/BasicMenu/BasicMenu";
import Header from "../Components/Header/Header";
import Carts from "../Components/Carts/Carts";
import ResultCarts from "../Components/ResultCarts/ResultCarts";
import AddCart from "../Components/AddCart/AddCart";
import SingleCart from "../Components/SingleCart/SingleCart";

export interface ProductType {
  id: number;
  title: string;
  price: number;
}
export type CartItemType = {
  name: string;
  id: number;
  products: ProductType[];
  discountPercentage: number;
  discountedPrice: number;
  discountedTotal: number;
  price: number;
  title: string;
};

const App = () => {
  const { visible, fetchCartItems } = useContext<any>(AppContext);

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <>
      <BasicMenu />
      <Header />
      <Box
        sx={{
          margin: visible ? "100px 0 0 200px" : "100px 0 0 120px",
          padding: "20px",
          transition: ".3s linear",
          flexWrap: "wrap",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          background: "lightgrey",
        }}
      >
        <ResultCarts />
        <Box
          sx={{
            fontWeight: "700",
            fontSize: "20px",
            textAlign: "left",
            width: "100%",
            marginTop: "100px",
            padding: "20px",
          }}
        >
          List of the products in carts
        </Box>
        <Carts />
        <AddCart />
        <SingleCart />
      </Box>
    </>
  );
};

export default App;
