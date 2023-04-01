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
        "@media only screen and (min-width: 320px) and (max-width: 720px)": {
          width: "100vw",
        },
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
          sx={{
            fontFamily: "Pacifico, sans-serif",
            fontSize: "35px",
            "@media only screen and (min-width: 320px) and (max-width: 720px)":
              {
                width: "100%",
                textAlign: "center",
                fontSize: "20px",
                marginLeft: "80px",
              },
          }}
        >
          Shop Online
        </Typography>
        <Box
          sx={{
            "@media only screen and (min-width: 320px) and (max-width: 720px)":
              {
                display: "none",
              },
          }}
        >
          <img src={logo} style={{ height: "100px", width: "150px" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
