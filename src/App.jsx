import Header from "./components/Header.jsx"
import Shop from "./components/Shop.jsx"
import { DUMMY_PRODUCTS } from "./dummy-projects.js"
import Product from "./components/Product.jsx"

function App() {
  console.log(DUMMY_PRODUCTS)
  return (
    <div className="container">
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </div>
  )
}

export default App
