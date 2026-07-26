import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/app.css";
import Header from "./invento_components/Header";
import Form from "./invento_components/Form";
import Content from "./invento_components/Content";
import Footer from "./invento_components/Footer";
import { useState } from "react";

const Invento = () => {

    // const [products, setProducts] = useState([
    //     {
    //         id: 1,
    //         name: "Black Marker",
    //         qty: 10
    //     },
    //      {
    //         id: 2,
    //         name: "Display material",
    //         qty: 20
    //     },
    //      {
    //         id: 3,
    //         name: "Flower pot",
    //         qty: 30
    //     },



    // ]); // send a request to a backend that will fetch products for this from database and set it as default for our products state

  return (
    <div className="container">
      <Header  />
      <Form  />
      <Content  />
      <Footer />
    </div>
  );
};

export default Invento;