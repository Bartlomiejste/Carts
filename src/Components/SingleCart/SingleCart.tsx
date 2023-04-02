import { Box } from "@mui/system";
import { useAppContext } from "../../AppContext/AppContext";
import BasicMenu from "../BasicMenu/BasicMenu";
import Header from "../Header/Header";
import ChartsLine from "./ChartsLine";
import TableCart from "./TableCart";

const SingleCart = () => {
  const { visible } = useAppContext();

  return (
    <>
      <BasicMenu />
      <Header />
      <Box
        sx={{
          margin: visible ? "100px 0 0 200px" : "100px 0 0 120px",
          padding: "20px",
          transition: ".3s linear",
          flexWrap: "wrap",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          background: "lightgrey",
          height: "100%",
          "@media only screen and (min-width: 320px) and (max-width: 1024px)": {
            margin: "100px 0 0 30px ",
          },
          "@media only screen and (min-width: 719px)": {
            margin: "100px 0 0 80px ",
          },
          "@media only screen and (min-width: 1024px)": {
            margin: "100px 0 0 120px ",
          },
        }}
      >
        <TableCart />
        <ChartsLine />
      </Box>
    </>
  );
};

export default SingleCart;
