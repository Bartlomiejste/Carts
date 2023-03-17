import { Box } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        background: "#F6F5F8",
        top: 0,
        left: 0,
        width: "100%",
        position: "fixed",
        display: "relative",
      }}
    >
      <Box
        sx={{
          height: "100px",
          width: "100px",
          backgroundImage: `url(${require("../../assets/1.png")})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      />
    </Box>
  );
};

export default Header;
