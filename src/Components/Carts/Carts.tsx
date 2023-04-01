import { Box } from "@mui/system";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CartsType, useAppContext } from "../../AppContext/AppContext";
import shoppingImg from "../../assets/shoppingCart.png";

const Carts = () => {
  const { fetchCartsItems, cartItems } = useAppContext();

  useEffect(() => {
    fetchCartsItems();
  }, []);

  return (
    <>
      {cartItems.map((cartItem: CartsType) => (
        <Box
          sx={{
            "@media only screen and (min-width: 320px) and (max-width: 1024px)":
              {
                fontSize: "12px",
                paddingLeft: "50px",
              },
          }}
        >
          <Link
            to={`/${cartItem.id}/`}
            key={cartItem.id}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <Box
              key={cartItem.id}
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
                transition: "transform 0.2s ease-out",
                "@media only screen and (min-width: 320px) and (max-width: 1024px)":
                  {
                    width: "200px",
                    height: "100px",
                  },

                "&:hover": {
                  cursor: "pointer",
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Box>
                <img
                  src={shoppingImg}
                  alt="shopping-cart"
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                />
              </Box>
              <Box
                key={cartItem.id}
                sx={{
                  display: "flex",
                  height: "100%",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <Box
                  sx={{
                    fontSize: "22px",
                    "@media only screen and (min-width: 320px) and (max-width: 1024px)":
                      {
                        fontSize: "12px",
                      },
                  }}
                >
                  <Box component="span">Cart number </Box>
                  <Box component="span" sx={{ fontWeight: "700" }}>
                    {cartItem.id}
                  </Box>
                </Box>
                <Box>
                  <Box component="span" sx={{ fontWeight: "700" }}>
                    Total discount{" "}
                  </Box>
                  <Box component="span" sx={{ fontWeight: "700" }}>
                    {cartItem.discountedTotal} $
                  </Box>
                </Box>
              </Box>
            </Box>
          </Link>
        </Box>
      ))}
    </>
  );
};

export default Carts;
