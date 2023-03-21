import { Box } from "@mui/system";
import { ProductsType, useAppContext } from "../../AppContext/AppContext";
import CountAnimation from "../CountAnimation/CountAnimation";
import cartsResult from "../../assets/cartsResult.png";
import cartsDiscount from "../../assets/cartsDiscount.png";
import cartsAll from "../../assets/cartsAll.png";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../Api/api";

const ResultCarts = () => {
  const [totalProducts, setTotalProducts] = useState<ProductsType[]>([]);
  const { cartItems } = useAppContext();

  useEffect(() => {
    getAllProducts().then((data) => setTotalProducts(data));
  }, []);
  console.log(totalProducts);

  const { totalDiscountedPrice } = cartItems.reduce(
    (acc, cartItem) => {
      return cartItem.products.reduce(
        (cartAcc, product) => ({
          totalDiscountedPrice:
            cartAcc.totalDiscountedPrice + product.discountedPrice,
        }),
        acc
      );
    },
    { totalDiscountedPrice: 0 }
  );

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
        Carts summary
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
          <Box>
            <img
              src={cartsResult}
              style={{
                height: "50px",
                width: "50px",
              }}
            />
          </Box>

          <Box sx={{ textAlign: "center" }}>
            Total carts
            <CountAnimation duration={2000} endCount={cartItems.length} />
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
          <Box>
            <img
              src={cartsDiscount}
              style={{
                height: "50px",
                width: "50px",
              }}
            />
          </Box>
          <Box sx={{ textAlign: "center" }}>
            Total products
            <CountAnimation duration={2000} endCount={100} />
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
          <Box>
            <img
              src={cartsAll}
              style={{
                height: "50px",
                width: "50px",
              }}
            />
          </Box>

          <Box sx={{ textAlign: "center" }}>
            Total discount $
            <CountAnimation duration={2000} endCount={totalDiscountedPrice} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ResultCarts;
