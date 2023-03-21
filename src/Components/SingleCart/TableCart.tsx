import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { CartsType, ProductsType } from "../../AppContext/AppContext";
import { useParams } from "react-router-dom";

export default function SpanningTable() {
  const [cart, setCart] = useState<CartsType>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetchSingleCartItem();
  }, []);

  const fetchSingleCartItem = async () => {
    const response = await fetch(`https://dummyjson.com/carts/${id}`);
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    const data = await response.json();
    setCart(data);
    console.log(data);
    return data;
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginTop: "80px",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{ maxWidth: 1000, borderRadius: "20px" }}
      >
        <Table aria-label="spanning table">
          <TableHead sx={{ background: "#fff9c4" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Product name</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Product price $
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Discounted price $
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Quantity
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Total $
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart?.products.map((product: ProductsType) => (
              <TableRow key={product.id}>
                <TableCell>{product.title}</TableCell>
                <TableCell align="center">{product.price}</TableCell>
                <TableCell align="center">
                  {Math.floor(product.discountedPrice / product.quantity)}
                </TableCell>
                <TableCell align="center">{product.quantity}</TableCell>
                <TableCell align="center">{product.total}</TableCell>
              </TableRow>
            ))}

            <TableRow sx={{ background: "#fff9c4" }}>
              <TableCell colSpan={1} sx={{ fontWeight: "bold" }}>
                Total
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }} colSpan={1}>
                {cart?.products.reduce(
                  (sum, product) => sum + product.price,
                  0
                )}
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }} colSpan={1}>
                {cart?.products.reduce(
                  (sum, product) =>
                    sum +
                    Math.floor(product.discountedPrice / product.quantity),
                  0
                )}
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }} colSpan={1}>
                {cart?.products.reduce(
                  (sum, product) => sum + product.quantity,
                  0
                )}
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }} colSpan={1}>
                {cart?.products.reduce(
                  (sum, product) => sum + product.total,
                  0
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
