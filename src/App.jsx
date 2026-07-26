// import a css file
import "./css/mystyle.css"

// import the components
import Header from "./components/Header"
import Hero from "./components/Hero"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App(){
  // sometimes this component get a piece of data from a backend application
  const pageVisit = 20 // this comes back from another application
  // lets assume we sent a request to a backend that fetch list of categories from a database and we want to display it on the Hero

const categories = ["Soup", "Stew", "Snacks", "Swallow"] //we got this from a backend

const products = [

  {
    id: 1,
    name: "Tomato Ketchup",
    price: 4000,
    iamge: "hero.png"
  },
  {
    id: 2,
    name: "AppleKetchup",
    price: 10000,
    iamge: "hero.png"
  },
  {
    id: 3,
    name: "Lemon Ketchup",
    price: 2000,
    iamge: "hero.png"
  }


] //lets assume we sent a request to a backend | API and what came back is array of object




  return(
    <div className="container">
      {/* This is how to send data from parent to a child */}
        <Header xyz = {pageVisit}  /> 
        <Hero cats={categories}/>
        {/* This is how to send data from parent to a child */}
        <Main xyz = {pageVisit} products={products}/>
        <Footer/>
    </div>

  )

}

export default App
