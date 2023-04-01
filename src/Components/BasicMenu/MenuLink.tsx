import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useAppContext } from "../../AppContext/AppContext";

const styles = {
  textDecoration: "none",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  padding: "150px 0 0 0 ",
};

const MenuLink = () => {
  const { visible } = useAppContext();
  return (
    <Link to="/" style={styles}>
      <Button
        variant="contained"
        startIcon={<DashboardIcon sx={{ padding: "0 0 0 12px " }} />}
        sx={{
          minWidth: "20px",
          height: "60px",
          width: "80%",
          background: "#FBA51A",
          "@media (max-width: 1434px)": {
            width: "0px",
            height: "20px",
          },
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
            "@media (max-width: 1434px)": {
              display: "none",
            },
          }}
        >
          Dashboard
        </Typography>
      </Button>
    </Link>
  );
};

export default MenuLink;
