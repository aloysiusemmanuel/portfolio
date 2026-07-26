import { createContext, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
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

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };