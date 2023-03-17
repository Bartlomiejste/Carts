import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { AppContext } from "../../AppContext/AppContext";
import { useContext } from "react";
export default function BasicMenu() {
  const { visible, change } = useContext<any>(AppContext);

  return (
    <Box
      sx={{
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        top: 0,
        left: 0,
        background: "#F5F4FA",
        width: visible ? "10%" : "5%",
        height: "100%",
        marginTop: "100px",
        zIndex: "999",
        padding: "15px",
        transition: ".3s linear",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            startIcon={<DashboardIcon />}
            sx={{
              height: "60px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: visible ? "space-between" : null,
              marginBottom: "20px",
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

        <Link to="/summary" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            startIcon={<BarChartIcon />}
            sx={{
              height: "60px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: visible ? "space-between" : null,
            }}
          >
            <Typography
              sx={{
                display: visible ? "flex" : "none",
                fontSize: "16px",
                transition: ".3s linear",
              }}
            >
              Summary charts
            </Typography>
          </Button>
        </Link>
        <Box
          sx={{
            fontSize: "80px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            height: "70%",
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
    </Box>
  );
}
