import { useEffect, useState } from "react";
import { getAllProducts } from "../Api/api";
import { ProductsType } from "../AppContext/AppContext";

const NewCart = () => {
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
    <div>
      <form>NewCart</form>
      <select onChange={currentOption}>
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.title}
          </option>
        ))}
      </select>
      <button onClick={handleAddProduct}>Dodaj produkt do koszyka</button>
      {productsInBox.map((product) => (
        <div key={product.id}>
          <div>{product.id}</div>
          <button>-</button>
          <button>+</button>
        </div>
      ))}
    </div>
  );
};

export default NewCart;
