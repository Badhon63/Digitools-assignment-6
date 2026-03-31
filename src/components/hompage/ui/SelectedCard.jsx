import React from 'react';
import { MdDelete } from 'react-icons/md';

const SelectedCard = ({ product, handleRemove }) => {
  return (
    <div className='flex items-center justify-between p-6 rounded-2xl bg-base-200'>
      <div className='flex items-center gap-4'>
        <span className='text-4xl'>{product.icon}</span>
        <div>
          <h2 className='font-semibold text-xl'>{product.name}</h2>
          <p className='text-sm opacity-60 font-semibold'>${product.price}</p>
        </div>
      </div>
      <div className='flex items-center gap-4 jube'>
        <button className='btn text-red-500' onClick={() => handleRemove(product)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default SelectedCard;