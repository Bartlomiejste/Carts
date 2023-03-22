import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getAllProducts } from "../Api/api";
import { ProductsType } from "../AppContext/AppContext";

const AddCart = () => {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [carts, setCarts] = useState<any[]>([]);
  const [selectedCartId, setSelectedCartId] = useState<number>();
  const [selectedProduct, setSelectedProduct] = useState<ProductsType>();
  const [productsInBox, setProductsInBox] = useState<any[]>([]);

  useEffect(() => {
    getAllProducts().then((data) => setProducts(data));
  }, []);

  const validationSchema = Yup.object({
    product: Yup.string().required("Produkt jest wymagany"),
    quantity: Yup.number().min(1, "Ilość musi być większa niż 0"),
  });

  const handleSubmit = ({ setSubmitting }: any) => {
    handleAddProduct();
    setSubmitting(false);
  };

  const handleNewCart = () => {
    const newCart = {
      id: carts.length + 1,
      name: `Koszyk ${carts.length + 1}`,
      products: [],
    };
    setCarts([...carts, newCart]);
    setSelectedCartId(newCart.id);
  };

  const handleAddProduct = () => {
    if (!selectedProduct) {
      return;
    }

    setCarts((prevCarts) => {
      return prevCarts.map((cart) => {
        if (cart.id === selectedCartId) {
          return {
            ...cart,
            products: [
              ...cart.products,
              { id: selectedProduct.id, quantity: 1 },
            ],
          };
        } else {
          return cart;
        }
      });
    });

    setSelectedProduct(undefined);
  };

  const currentOption = (event: any) => {
    setSelectedCartId(parseInt(event.target.value));
  };

  const selectProduct = (event: any) => {
    const selectedProductId = parseInt(event.target.value);
    const selectedProducts = products.find(
      (product) => product.id === selectedProductId
    );
    setSelectedProduct(selectedProducts);
  };

  return (
    <div>
      <h2>Nowy koszyk</h2>
      <div>
        <button onClick={handleNewCart}>Nowy koszyk</button>
      </div>
      <Formik
        initialValues={{
          product: "",
          quantity: 1,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ dirty, isValid, isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="cart">Koszyk:</label>
              <select name="cart" onChange={currentOption}>
                <option value="">Wybierz koszyk</option>
                {carts.map((cart) => (
                  <option key={cart.id} value={cart.id}>
                    {cart.name}
                  </option>
                ))}
              </select>
              <ErrorMessage name="cart" component="div" />
            </div>
            <div>
              <label htmlFor="product">Produkt:</label>
              <Field name="product" as="select">
                <option value="">Wybierz produkt</option>
                {products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.title}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="product" component="div" />
            </div>
            <div>
              <label htmlFor="quantity">Ilość:</label>
              <Field name="quantity" type="number" min="1" />
              <ErrorMessage name="quantity" component="div" />
            </div>
            <button
              type="submit"
              disabled={!dirty || !isValid || isSubmitting}
              onClick={handleAddProduct}
            >
              Dodaj produkt
            </button>
          </Form>
        )}
      </Formik>
      <div>
        <h2>Koszyki</h2>
        <ul>
          {productsInBox.map((product) => (
            <div key={product.id}>
              <div>{product.id}</div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddCart;
