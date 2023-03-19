import { Box } from "@mui/system";
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";

const SingleCart = () => {
  const { cart } = useContext<any>(AppContext);

  return (
    <>
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
