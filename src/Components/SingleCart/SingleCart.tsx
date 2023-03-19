import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../AppContext/AppContext";
import BasicMenu from "../BasicMenu/BasicMenu";
import Header from "../Header/Header";

type CartItemType = {
  name: string;
  id: number;
  products: ProductType[];
  discountPercentage: number;
  discountedPrice: number;
  discountedTotal: number;
  price: number;
  title: string;
};

interface ProductType {
  id: number;
  title: string;
  price: number;
}

const SingleCart = () => {
  const [cart, setCart] = useState<CartItemType>();
  const { id } = useParams<{ id: string }>();
  const { visible } = useContext<any>(AppContext);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const fetchCartItems = async () => {
    try {
      const res = await fetch("https://dummyjson.com/carts");
      const data = await res.json();
      setCartItems(data.carts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCartItems();
    fetchSingleCartItem();
  }, []);

  const fetchSingleCartItem = async () => {
    const response = await fetch(`https://dummyjson.com/carts/${id}`);
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    const data = await response.json();
    setCart(data);
    console.log(data);
    return data;
  };

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
          height: "100vh",
        }}
      >
        {cart?.products.map((product: ProductType) => (
          <Typography key={product.id}>{product.title}</Typography>
        ))}
        {/* pobrane tytuly products z carts trzeba je dodać  */}
        <Box
          key={cart?.id}
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "350px",
            height: "150px",
            margin: "15px",
            borderRadius: "15px",
            background: "#ffff",
            boxShadow: "10px 10px 15px #E6E5F0",
          }}
        >
          <Box>
            <Box
              sx={{
                height: "50px",
                width: "50px",
                backgroundImage: `url(${require("../../assets/shopping-cart.png")})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              height: "100%",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Box sx={{ fontSize: "22px" }}>
              <Box component="span">Cart number </Box>
              <Box component="span" sx={{ fontWeight: "700" }}>
                {cart?.id}
              </Box>
            </Box>
            <Box>
              <Box component="span">Total discounted </Box>
              <Box component="span" sx={{ fontWeight: "700" }}>
                {cart?.discountedTotal} $
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SingleCart;
