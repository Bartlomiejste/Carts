import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
import CountAnimation from "../CountAnimation/CountAnimation";

const ResultCarts = () => {
  const { cartItems } = useContext<any>(AppContext);

  let totalDiscountedPrice = 0;
  let totalProducts = 0;
  const totalCarts = cartItems.length;

  cartItems.forEach((cart: { products: any[] }) => {
    cart.products.forEach(
      (product: { discountedPrice: number; quantity: number }) => {
        totalDiscountedPrice += product.discountedPrice;
        totalProducts += product.quantity;
      }
    );
  });

  return (
    <>
      <Box
        sx={{
          fontWeight: "700",
          fontSize: "20px",
          textAlign: "left",
          width: "100%",
          padding: "20px",
        }}
      >
        Results Cart
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "250px",
            height: "100px",
            margin: "15px",
            borderRadius: "15px",
            background: "#ffff",
            boxShadow: "10px 10px 15px #E6E5F0",
          }}
        >
          <Box
            sx={{
              height: "50px",
              width: "50px",
              backgroundImage: `url(${require("../../assets/cartsResult.png")})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          />
          <Box sx={{ textAlign: "center" }}>
            Total carts <CountAnimation duration={2000} endCount={totalCarts} />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "250px",
            height: "100px",
            margin: "15px",
            borderRadius: "15px",
            background: "#ffff",
            boxShadow: "10px 10px 15px #E6E5F0",
          }}
        >
          <Box
            sx={{
              height: "50px",
              width: "50px",
              backgroundImage: `url(${require("../../assets/cartsDiscount.png")})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          />
          <Box sx={{ textAlign: "center" }}>
            Total products
            <CountAnimation duration={2000} endCount={totalProducts} />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "250px",
            height: "100px",
            margin: "15px",
            borderRadius: "15px",
            background: "#ffff",
            boxShadow: "10px 10px 15px #E6E5F0",
          }}
        >
          <Box
            sx={{
              height: "50px",
              width: "50px",
              backgroundImage: `url(${require("../../assets/cartsAll.png")})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          />
          <Box sx={{ textAlign: "center" }}>
            Total discounted $
            <CountAnimation duration={2000} endCount={totalDiscountedPrice} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ResultCarts;
