import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getAllProducts } from "../Api/api";
import { ProductsType } from "../AppContext/AppContext";

const TicketForm = () => {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [productsInBox, setProductsInBox] = useState<any[]>([]);

  const [selectedProduct, setSelectedProduct] = useState<ProductsType>();
  useEffect(() => {
    getAllProducts().then((data) => setProducts(data));
  }, []);

  const handleAddProduct = () => {
    setProductsInBox((prev) => [...prev, { id: selectedProduct, quantity: 1 }]);
  };

  const currentOption = (event: any) => {
    setSelectedProduct(event.target.value);
  };

  return (
    <Formik
      initialValues={{ tickets: [] }}
      validationSchema={Yup.object({
        tickets: Yup.array().of(
          Yup.object().shape({
            quantity: Yup.number()
              .required("Quantity is required")
              .min(1, "Quantity must be greater than 0"),
            ticketType: Yup.string().required("Ticket type is required"),
          })
        ),
      })}
      onSubmit={({}) => {
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="cart">Koszyk:</label>
            <select name="cart" onChange={currentOption}>
              <option value="">Wybierz koszyk</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.title}
                </option>
              ))}
            </select>
            <ErrorMessage name="cart" component="div" />
          </div>
          <button type="button" onClick={handleAddProduct}>
            Add to cart
          </button>
          <ul>
            {productsInBox.map((product) => (
              <div key={product.id}>
                <div>{product.id}</div>
              </div>
            ))}
          </ul>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default TicketForm;
function setSubmitting(arg0: boolean) {
  throw new Error("Function not implemented.");
}
