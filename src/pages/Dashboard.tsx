import { Box } from "@mui/material";
import { useAppContext } from "../AppContext/AppContext";
import BasicMenu from "../Components/BasicMenu/BasicMenu";
import Header from "../Components/Header/Header";
import Carts from "../Components/Carts/Carts";
import StatisticCarts from "../Components/StatisticCarts/StatisticCarts";
import NewCart from "./NewCart";

const Dashboard = () => {
  const { visible } = useAppContext();

  return (
    <>
      <BasicMenu />
      <Header />
      <Box
        sx={{
          padding: visible ? "150px 0 0 250px" : "150px 0 0 150px",
          transition: ".3s linear",
          flexWrap: "wrap",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          background: "lightgrey",
        }}
      >
        <StatisticCarts />
        <Box
          sx={{
            fontWeight: "700",
            fontSize: "20px",
            textAlign: "left",
            width: "100%",
            marginTop: "100px",
            padding: "20px",
          }}
        >
          List of the carts
        </Box>
        <Carts />
        <NewCart />
      </Box>
    </>
  );
};

export default Dashboard;
