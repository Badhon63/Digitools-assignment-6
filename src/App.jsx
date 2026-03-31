import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/hompage/banner/Banner'
import Ratings from './components/hompage/banner/Ratings'
import Products from './components/hompage/products/Products'
import Navbar from './components/navbar/Navbar'

const fetchProducts = async () => {
  const res = await fetch('/data.json');
  return res.json();
}

const productsPromise = fetchProducts();

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <Banner />
      <Ratings />
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Products productsPromise={productsPromise} setCartCount={setCartCount} cartCount={cartCount} />
      </Suspense>
    </div>
  )
}

export default App