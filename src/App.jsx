import Header from "./components/Header.jsx"
import Shop from "./components/Shop.jsx"
import { DUMMY_PRODUCTS } from "./dummy-projects.js"
import Product from "./components/Product.jsx"
import ShoppingCartContextProvider from "./context/ShoppingCartContext.jsx"

function App() {
  return (
    <div className="container">
      <ShoppingCartContextProvider>
        <Header />
        <Shop>
          {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
          ))}
        </Shop>
      </ShoppingCartContextProvider>
    </div>
  )
}

export default App
