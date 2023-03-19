import { Box } from "@mui/system";
import { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../AppContext/AppContext";
import { CartItemType } from "../../pages/Dashboard";

const Carts = () => {
  const { fetchCartItems, cartItems } = useContext<any>(AppContext);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <>
      {cartItems.map((cartItem: CartItemType) => (
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
            "&:hover": {
              cursor: "pointer",
              transform: "translateY(-5px)",
            },
          }}
          onClick={() => navigate(`/${id}`)}
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
            key={cartItem.id}
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
                {cartItem.id}
              </Box>
            </Box>
            <Box>
              <Box component="span">Total discounted </Box>
              <Box component="span" sx={{ fontWeight: "700" }}>
                {cartItem.discountedTotal} $
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default Carts;
// {cartItem.products.map((product: ProductType) => (
//   <Typography key={product.id}>{product.title}</Typography>
// ))}
