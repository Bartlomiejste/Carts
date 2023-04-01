import { Box } from "@mui/system";
import { useAppContext } from "../../AppContext/AppContext";
import CountAnimation from "../CountAnimation/CountAnimation";
import cartsResult from "../../assets/cartsResult.png";
import cartsDiscount from "../../assets/cartsDiscount.png";
import cartsAll from "../../assets/cartsAll.png";

const ResultCarts = () => {
  const { cartItems } = useAppContext();

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
          "@media only screen and (min-width: 320px) and (max-width: 1023px)": {
            textAlign: "center",
            paddingLeft: "70px",
          },
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
          "@media only screen and (min-width: 320px) and  (max-width: 1023px)":
            {
              flexDirection: "column",
              flexWrap: "wrap",
              paddingLeft: "50px",
            },
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
            "@media only screen and (min-width: 320px) and (max-width: 1024px)":
              {
                width: "190px",
                height: "100px",
              },
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

          <Box
            sx={{
              textAlign: "center",
              "@media only screen and (min-width: 320px) and (max-width: 1024px)":
                {
                  fontSize: "12px",
                },
            }}
          >
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
            "@media only screen and (min-width: 320px) and (max-width: 720px)":
              {
                width: "190px",
                height: "100px",
              },
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
          <Box
            sx={{
              textAlign: "center",
              "@media only screen and (min-width: 320px) and (max-width: 1024px)":
                {
                  fontSize: "12px",
                },
            }}
          >
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
            "@media only screen and (min-width: 320px) and (max-width: 720px)":
              {
                width: "190px",
                height: "100px",
              },
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

          <Box
            sx={{
              textAlign: "center",
              "@media only screen and (min-width: 320px) and (max-width: 1024px)":
                {
                  fontSize: "12px",
                },
            }}
          >
            Total discount $
            <CountAnimation duration={2000} endCount={totalDiscountedPrice} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ResultCarts;
