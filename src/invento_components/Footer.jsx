// Our goal is to let the footer consume what is inside our AppNameContext: useContext(which context are you consuming)

import { useContext } from "react";
import { AppNameContext } from "../main";

const Footer = () => {
     const{appname} = useContext(AppNameContext) // TO ACCESS WHAT IS INSIDE AppNameContext
  return (
    <div className="row footer pt-5 pb-2">
      <div className="col text-center">
        <h5>Copyright &copy; {appname} 2025</h5>
      </div>
    </div>
  );
};

export default Footer;
