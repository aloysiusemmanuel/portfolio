import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

const Form = () => {

  const {products, setProducts} = useContext(ProductContext);

  const [formData, setFormData] = useState({
    name: "",
    qty: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.qty) return;

    const newProduct = {
      id: Date.now() + Math.floor(Math.random() * 1000000),
      name: formData.name.trim(),
      qty: Number(formData.qty),
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setFormData({ name: "", qty: "" });
  };

  return (
    <div className="row text-center formy">
      <div className="col-md-6 offset-md-3">
        <h3>Add Product</h3>
      </div>
      <div className="col-md-8 offset-md-2">
        <form className="py-3 px-5 brr" onSubmit={handleSubmit}>
          <div className="row my-4">
            <div className="col-md-7">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="product name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3">
              <input
                type="number"
                name="qty"
                className="form-control"
                placeholder="Qty"
                value={formData.qty}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-2 text-end">
              <input type="submit" value="Add Product" className="btn btn-primary mine" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
