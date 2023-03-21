import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useAppContext } from "../../AppContext/AppContext";
import MenuLink from "./MenuLink";

export default function BasicMenu() {
  const { visible, change } = useAppContext();

  return (
    <Box
      sx={{
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        top: 0,
        left: 0,
        background: "#F5F4FA",
        width: visible ? "12%" : "7%",
        height: "100%",
        zIndex: "999",
        transition: ".3s linear",
      }}
    >
      <MenuLink />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {visible ? (
          <ArrowBackIcon
            onClick={change}
            sx={{
              fontSize: "40px",
            }}
          />
        ) : (
          <ArrowForwardIcon
            onClick={change}
            sx={{
              fontSize: "40px",
            }}
          />
        )}
      </Box>
    </Box>
  );
}
