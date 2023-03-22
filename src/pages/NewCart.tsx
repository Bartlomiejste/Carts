import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { getAllProducts } from "../Api/api";
import { ProductsType } from "../AppContext/AppContext";
import shoppingImg from "../../src/assets/shoppingCart.png";
import { Button, FormControl, InputLabel, Typography } from "@mui/material";

const NewCart = () => {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [productsInBox, setProductsInBox] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductsType>();
  const [isCartCreated, setIsCartCreated] = useState(false);
  const [allCarts, setAllCarts] = useState<any[]>([]);

  const getCartsFromLocalStorage = () => {
    const cartsFromLocalStorage = localStorage.getItem("carts");
    if (cartsFromLocalStorage) {
      setAllCarts(JSON.parse(cartsFromLocalStorage));
    }
  };

  useEffect(() => {
    getAllProducts().then((data) => setProducts(data));
    getCartsFromLocalStorage();
  }, []);

  const handleAddProduct = () => {
    if (!selectedProduct) {
      alert("Musisz wybrać produkt z listy");
      return;
    }
    if (productsInBox.length < 5) {
      setProductsInBox((prev) => [
        ...prev,
        { id: selectedProduct, quantity: 1 },
      ]);
    } else {
      alert("Nie można dodać więcej niż 5 produktów do koszyka");
    }
  };

  const handleCreateCart = () => {
    if (productsInBox.length === 5) {
      const newCart = productsInBox;
      setAllCarts((prev) => [...prev, newCart]);
      saveCartsToLocalStorage([...allCarts, newCart]);
      setIsCartCreated(true);
      setProductsInBox([]);
      setSelectedProduct(undefined);
    } else {
      alert("Musisz dodać 5 produktów do koszyka, aby stworzyć koszyk");
    }
  };

  const currentOption = (event: any) => {
    setSelectedProduct(event.target.value);
  };

  const handleRemoveCart = (cartId: number) => {
    const updatedCarts = allCarts.filter((cart) => cartId !== cart.id);
    saveCartsToLocalStorage(updatedCarts);
    setAllCarts(updatedCarts);
  };

  const saveCartsToLocalStorage = (carts: any[]) => {
    localStorage.setItem("carts", JSON.stringify(carts));
  };

  return (
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
      <Box sx={{ marginBottom: "20px" }}>Add new cart</Box>
      <FormControl
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "row",
        }}
      >
        <select onChange={currentOption}>
          <option value="">Select product</option>
          {products.map((product) => (
            <option key={product.id}>{product.title}</option>
          ))}
        </select>
        <Button
          sx={{ background: "#FBA51A", color: "#ffff" }}
          onClick={handleAddProduct}
        >
          Add product to cart
        </Button>
        <Box>
          Selected products:
          {productsInBox.map((product) => (
            <Box key={product.id} sx={{ fontSize: "12px" }}>
              <Box>{product.id}</Box>
            </Box>
          ))}
        </Box>
      </FormControl>
      {productsInBox.length === 5 && (
        <Box>
          <Button
            sx={{
              background: "#FBA51A",
              color: "#ffff",
              marginTop: "20px",
              justifyItems: "flex-end",
              textAlign: "left",
            }}
            onClick={handleCreateCart}
          >
            Create cart
          </Button>
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ margin: "20px", width: "100%" }}>My new cart</Box>

        {allCarts.length ? (
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {allCarts?.map((cart) => (
              <Box
                sx={{
                  width: "350px",
                  height: "150px",
                  margin: "15px",
                  flexDirectoin: "column",
                  borderRadius: "15px",
                  background: "#ffff",
                  boxShadow: "10px 10px 15px #E6E5F0",
                  transition: "transform 0.2s ease-out",
                  "&:hover": {
                    cursor: "pointer",
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button onClick={() => handleRemoveCart(cart.id)}>
                    Delete cart
                  </Button>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <img
                    src={shoppingImg}
                    alt="shopping-cart"
                    style={{
                      height: "50px",
                      width: "50px",
                    }}
                  />

                  <Box sx={{ fontSize: "22px" }}>
                    <Box component="span">My products: </Box>
                    <Box component="span" sx={{ fontWeight: "700" }}>
                      <Box>
                        <Typography
                          sx={{ fontSize: "12px", textAlign: "center" }}
                          key={cart.id}
                        >
                          {cart.id}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        ) : (
          <Typography variant="subtitle1">No Carts Found</Typography>
        )}
      </Box>
    </Box>
  );
};

export default NewCart;
