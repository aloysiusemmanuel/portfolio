import { createContext, useState } from "react";

const VibeProductContext = createContext();

const VibeProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Black Marker",
      qty: 10,
    },
    {
      id: 2,
      name: "Display material",
      qty: 20,
    },
    {
      id: 3,
      name: "Flower pot",
      qty: 30,
    },
  ]);

  const addProduct = (product) => {
    const newProduct = {
      id: Date.now(),
      ...product,
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const deleteProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const fetchAllProducts = () => products;

  return (
    <VibeProductContext.Provider
      value={{ products, addProduct, deleteProduct, fetchAllProducts }}
    >
      {children}
    </VibeProductContext.Provider>
  );
};

export { VibeProductContext, VibeProductProvider };
