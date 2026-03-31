import React from 'react';
import Card from '../../ui/Card';

const AvailableProducts = ({ productsData, selectedProducts, setSelectedProducts, setCartCount, cartCount }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
      {productsData.map(product =>
        <Card
          key={product.id}
          product={product}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
          setCartCount={setCartCount}
          cartCount={cartCount}
        />
      )}
    </div>
  );
};

export default AvailableProducts;