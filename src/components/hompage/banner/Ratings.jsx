import React from 'react';

const Ratings = () => {
  return (
    <div className='bg-linear-to-r from-[#632EF7] to-[#9415FA] text-white flex flex-col md:flex-row justify-center gap-10 lg:gap-32 p-12 text-center mt-20'>
      <div className='space-y-3 md:border-r md:pr-10 lg:pr-32'>
        <h3 className='text-6xl font-bold'>50K+</h3>
        <p className='text-xl'>Active Users</p>
      </div>
      <div className='space-y-3'>
        <h3 className='text-6xl font-bold'>200+</h3>
        <p className='text-xl'>Premium Tools</p>
      </div>
      <div className='space-y-3 md:border-l md:pl-10 lg:pl-32'>
        <h3 className='text-6xl font-bold'>4.9</h3>
        <p className='text-xl'>Rating</p>
      </div>
    </div>
  );
};

export default Ratings;