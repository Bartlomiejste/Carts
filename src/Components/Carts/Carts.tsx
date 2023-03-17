import { Box } from "@mui/system";

const Carts = () => {
  return (
    <Box
      sx={{
        width: "350px",
        height: "200px",
        borderRadius: "15px",
        background: "lightgrey",
        boxShadow: "10px 10px 15px #E6E5F0",
        transition: "transform 0.2s ease-out",
        "&:hover": {
          cursor: "pointer",
          transform: "translateY(-5px)",
        },
      }}
    >
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
      <Box>Cart number{1}</Box>
      <Box>DiscountedTotal{100} $</Box>
    </Box>
  );
};

export default Carts;
