import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ProductProvider } from './context/ProductContext.jsx'
import './index.css'
import App from './App.jsx'
import Blogger from "./Blogger.jsx"
import Counter from "./Counter.jsx"
import Invento from './Invento.jsx'
import Meal from './Meal.jsx'
//import bootstrap css that was installed as a package
// import "bootstrap/dist/css/bootstrap.css"

// const username = "emmanuel";

// To use context api follow this steps
// create the context: createContext() and import it at the top
export const AppNameContext = createContext();
// create a provider: a proivder is suoer component and it contains data| function that is to be access by the children conponent as value prop
// wrap aprovider around all the children that want to inherit the data
// go inside children component that needs the data and consume the context: we use hook useContext(thecontextuwanuse)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Blogger/> */}
    {/* <Counter /> */}
    {/* <ProductProvider>
        <AppNameContext.Provider  value= {{ appname:"Invento App"}}>
          <Invento/>
        </AppNameContext.Provider>
    </ProductProvider> */}
    <Meal/>

  </StrictMode>

  // Rule1: Element to be rendered must have the same parent

  // <div>
  //   <h1>Hello World, welcome {username} </h1>
  //   <p>I am learning React</p>
  // </div>

  
)
