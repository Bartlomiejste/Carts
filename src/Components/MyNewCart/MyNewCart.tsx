import { Box } from "@mui/system";

interface NewCartProps {
  cartName: string;
}

const MyNewCart = ({ cartName }: NewCartProps) => {
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
          transition: "transform 0.2s ease-out",
          "&:hover": {
            cursor: "pointer",
            transform: "translateY(-5px)",
          },
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
              {cartName}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MyNewCart;
