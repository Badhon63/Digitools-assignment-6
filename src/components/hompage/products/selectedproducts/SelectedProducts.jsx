import React from 'react';
import SelectedCard from '../../ui/SelectedCard';
import { toast } from 'react-toastify';

const SelectedProducts = ({ selectedProducts, setSelectedProducts, setCartCount, cartCount }) => {

  const handleRemove = (product) => {
    const filtered = selectedProducts.filter(p => p.id !== product.id);
    setSelectedProducts(filtered);
    setCartCount(cartCount - 1);
    toast.error(`${product.name} removed from cart!`);
  }

  const handleCheckout = () => {
    setSelectedProducts([]);
    setCartCount(0);
    toast.success('Checkout successful!');
  }

  return (
    <div className='mt-10'>
      {selectedProducts.length === 0
        ? <div className='h-100 flex items-center justify-center flex-col gap-4'>
          <h2 className='font-semibold text-xl'>Your cart is empty</h2>
          <p>Go to Products tab to add items</p>
        </div>
        : <div className='space-y-4 border border-stone-200 p-8 rounded-2xl'>
          <p className='text-2xl font-semibold'>Your Cart</p>
          {selectedProducts.map((product, index) =>
            <SelectedCard
              key={index}
              product={product}
              handleRemove={handleRemove}
            />
          )}
          <div className='flex justify-between items-center '>
            <p className=''>Total:</p>
              
              <p className='font-bold text-xl'>${selectedProducts.reduce((total, product) => total + product.price, 0).toFixed(2)}</p>
            
          </div>
          <button className='btn bg-linear-to-r from-[#632EF7] to-[#9415FA] text-white rounded-3xl w-full' onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      }
    </div>
  );
};

export default SelectedProducts;