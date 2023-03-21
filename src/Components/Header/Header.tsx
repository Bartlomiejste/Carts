import { Box, Typography } from "@mui/material";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <Box
      sx={{
        background: "#FBA51A",
        top: 0,
        left: 0,
        width: "100%",
        height: "120px",
        position: "fixed",
        zIndex: "999",
        display: "relative",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Typography
          sx={{ fontFamily: "Pacifico, sans-serif", fontSize: "35px" }}
        >
          Shop Online
        </Typography>
        <img
          src={logo}
          style={{
            height: "100%",
            width: "10%",
          }}
        />
      </Box>
    </Box>
  );
};

export default Header;
