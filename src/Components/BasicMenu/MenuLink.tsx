import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useAppContext } from "../../AppContext/AppContext";

const MenuLink = () => {
  const { visible } = useAppContext();
  return (
    <Link
      to="/"
      style={{
        textDecoration: "none",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding: "150px 0 0 0 ",
      }}
    >
      <Button
        variant="contained"
        startIcon={<DashboardIcon />}
        sx={{
          height: "60px",
          width: "80%",
          background: "#FBA51A",
          "&:hover": {
            background: "#FBA51A",
          },
        }}
      >
        <Typography
          sx={{
            display: visible ? "flex" : "none",
            fontSize: "16px",
            transition: ".3s linear",
          }}
        >
          Dashboard
        </Typography>
      </Button>
    </Link>
  );
};

export default MenuLink;
