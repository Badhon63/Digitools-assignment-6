import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/hompage/banner/Banner'
import Ratings from './components/hompage/banner/Ratings'
import Products from './components/hompage/products/Products'
import Navbar from './components/navbar/Navbar'
import Steps from './components/hompage/steps/Steps'
import Pricing from './components/hompage/pricing/Pricing'
import BottomBanner from './components/hompage/bottombanner/BottomBanner'
import Footer from './components/footer/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <Suspense fallback={
  <div className='flex justify-center items-center h-screen'>
    <span className="loading loading-dots loading-xl"></span>
  </div>
}>
        <Products productsPromise={productsPromise} setCartCount={setCartCount} cartCount={cartCount} />
      </Suspense>
      <Steps></Steps>
      <Pricing></Pricing>
      <BottomBanner></BottomBanner>
      <Footer></Footer>
      <ToastContainer />
    </div>
  )
}

export default App