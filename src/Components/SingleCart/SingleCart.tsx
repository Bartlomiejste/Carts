import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { CartItemType } from "../../pages/Dashboard";

type CartItemType = {
  name: string;
  id: number;
  discountPercentage: number;
  discountedPrice: number;
  discountedTotal: number;
  price: number;
  title: string;
};
const SingleCart = () => {
  const [cart, setCart] = useState<CartItemType>();
  const { id } = useParams();

  useEffect(() => {
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
    return data;
  };
  return (
    <>
      {cart}
      <Box
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
    </>
  );
};
export default SingleCart;
