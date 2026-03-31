import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Card = ({ product, selectedProducts, setSelectedProducts, setCartCount, cartCount }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleBuyNow = () => {
    setIsSelected(true);
    setSelectedProducts([...selectedProducts, product]);
    setCartCount(cartCount + 1);
    toast.success(`${product.name} added to cart!`);
  }

  return (
    <div className=' border border-stone-200 rounded-2xl p-6 space-y-4 bg-base-100 shadow-sm'>
      <div className='flex justify-between items-center'>
        <span className='text-4xl'>{product.icon}</span>
        <span className={`text-xs px-3 py-1 rounded-full font-semibold
          ${product.tagType === 'popular' ? 'bg-purple-100 text-purple-600' : ''}
          ${product.tagType === 'new' ? 'bg-green-100 text-green-600' : ''}
          ${product.tagType === 'best seller' ? 'bg-orange-100 text-orange-600' : ''}
        `}>{product.tag}</span>
      </div>
      <h2 className='text-3xl font-bold'>{product.name}</h2>
      <p className='text-sm opacity-70'>{product.description}</p>
      <div>
        <span className='text-2xl font-bold opacity-90'>${product.price}</span>
        <span className='text-sm opacity-60'>/{product.period}</span>
      </div>
      <ul className='space-y-1'>
        {product.features.map((feature, index) =>
          <li key={index} className='text-sm flex items-center gap-2'>
            <span className='text-green-500'>✓</span>{feature}
          </li>
        )}
      </ul>
      <button
        className='btn bg-linear-to-r from-[#632EF7] to-[#9415FA] text-white rounded-3xl w-full mt-2'
        onClick={handleBuyNow}
        disabled={isSelected}
      >
        {isSelected ? 'Added to cart' : 'Buy Now'}
      </button>
    </div>
  );
};

export default Card;