import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { getAllProducts } from "../Api/api";
import { ProductsType } from "../AppContext/AppContext";
import shoppingImg from "../../src/assets/shoppingCart.png";
import { Button, FormControl, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, SetStateAction } from "react";

const NewCart = () => {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [productsInBox, setProductsInBox] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductsType>();
  const [allCarts, setAllCarts] = useState<any[]>([]);

  useEffect(() => {
    getAllProducts().then((data) => setProducts(data));
    getCartsFromLocalStorage();
  }, []);

  const handleAddProduct = () => {
    if (!selectedProduct) {
      alert("You must select a product from the lists");
      return;
    }
    if (productsInBox.length < 5) {
      setProductsInBox((prev) => [
        ...prev,
        { id: selectedProduct, quantity: 1 },
      ]);
    } else {
      alert("Can't add more than 5 items to cart");
    }
  };

  const getCartsFromLocalStorage = () => {
    const cartsFromLocalStorage = localStorage.getItem("carts");
    if (cartsFromLocalStorage) {
      setAllCarts(JSON.parse(cartsFromLocalStorage));
    }
  };

  const handleCreateCart = () => {
    if (productsInBox.length === 5) {
      const newCart = {
        id: uuidv4(),
        products: productsInBox,
      };
      setAllCarts((prev) => [...prev, newCart]);
      saveCartsToLocalStorage([...allCarts, newCart]);
      setProductsInBox([]);
      setSelectedProduct(undefined);
    } else {
      alert("You must add 5 items to your cart to create a cart");
    }
  };

  const currentOption = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedProduct(
      event.target.value as SetStateAction<ProductsType | undefined>
    );
  };
  const saveCartsToLocalStorage = (carts: ProductsType[]) => {
    localStorage.setItem("carts", JSON.stringify(carts));
  };

  const handleRemoveCart = (cartId: string) => {
    const updatedCarts = allCarts.filter((cart) => cart.id !== cartId);
    saveCartsToLocalStorage(updatedCarts);
    setAllCarts(() => {
      return updatedCarts;
    });
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
        "@media only screen and (min-width: 320px) and (max-width: 1024px)": {
          textAlign: "center",
          paddingLeft: "70px",
          fontSize: "16px",
        },
      }}
    >
      <Box sx={{ marginBottom: "20px" }}>
        Add new cart
        <Typography>(add 5 products)</Typography>
      </Box>
      <FormControl
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "row",
          "@media only screen and (min-width: 320px) and (max-width: 1024px)": {
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "space-around",
            height: "200px",
          },
        }}
      >
        <select onChange={currentOption} style={{ width: "150px" }}>
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
        <Box sx={{ margin: "150px 20px 20px 20px", width: "100%" }}>
          My new cart
        </Box>

        {allCarts.length ? (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {allCarts?.map((cart) => (
              <Box
                sx={{
                  width: "350px",
                  height: "170px",
                  margin: "15px",
                  flexDirectoin: "column",
                  borderRadius: "15px",
                  background: "#ffff",
                  boxShadow: "10px 10px 15px #E6E5F0",
                  transition: "transform 0.2s ease-out",
                  "@media only screen and (min-width: 320px) and (max-width: 1024px)":
                    { width: "200px", height: "140px" },
                  "&:hover": {
                    cursor: "pointer",
                    transform: "translateY(-5px)",
                  },
                }}
                key={cart.id}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    fontSize: "10px",
                  }}
                >
                  <Button
                    sx={{
                      fontSize: "13px",
                    }}
                  >
                    <DeleteIcon
                      sx={{
                        color: "#FBA51A",
                        "@media only screen and (min-width: 320px) and (max-width: 1024px)":
                          { width: "20px", height: "20px" },
                      }}
                      onClick={() => handleRemoveCart(cart.id)}
                    />
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

                  <Box component="span" sx={{ fontWeight: "700" }}>
                    <Box>
                      {cart.products.map((item: ProductsType, id: number) => (
                        <Typography
                          sx={{
                            fontSize: "12px",
                            textAlign: "left",
                            margin: "5px",
                            "@media only screen and (min-width: 320px) and (max-width: 1024px)":
                              { fontSize: "9px" },
                          }}
                          key={id}
                        >
                          {item.id}
                        </Typography>
                      ))}
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
