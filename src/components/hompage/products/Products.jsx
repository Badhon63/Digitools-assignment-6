import React, { use, useState } from 'react';
import AvailableProducts from './availableproducts/AvailableProducts';
import SelectedProducts from './selectedproducts/SelectedProducts';

const Products = ({ productsPromise, setCartCount, cartCount }) => {
  const productsData = use(productsPromise);
  const [active, setActive] = useState('available');
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleActiveButton = (state) => {
    setActive(state);
  }

  return (
    <div className='w-11/12 mx-auto lg:w-5/6 mt-10 lg:mt-20'>
      <div className='text-center space-y-4'>
        <h2 className='font-bold text-5xl'>Premium Digital Tools</h2>
        <p>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
        <div>
          <button className={`btn rounded-l-md rounded-r-none ${active === 'available' ? 'bg-linear-to-r from-[#632EF7] to-[#9415FA] text-white' : ''}`} onClick={() => handleActiveButton('available')}>Products</button>
          <button className={`btn rounded-r-md rounded-l-none ${active === 'selected' ? 'bg-linear-to-r from-[#632EF7] to-[#9415FA] text-white' : ''}`} onClick={() => handleActiveButton('selected')}>Cart ({selectedProducts.length})</button>
        </div>
      </div>

      {active === 'available'
        ? <AvailableProducts
            productsData={productsData}
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
            setCartCount={setCartCount}
            cartCount={cartCount}
          />
        : <SelectedProducts
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
            setCartCount={setCartCount}
            cartCount={cartCount}
          />}
    </div>
  );
};

export default Products;