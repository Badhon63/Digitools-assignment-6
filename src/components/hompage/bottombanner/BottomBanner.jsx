import React from 'react';

const BottomBanner = () => {
  return (
    <div className='bg-linear-to-b from-[#632EF7] to-[#9415FA] mt-10 lg:mt-20'>
<div className='w-11/12 mx-auto lg:w-5/6 py-10 lg:py-20 text-white text-center space-y-5'>        <h2 className='text-5xl font-semibold'>Ready To Transform Your Workflow?</h2>
        <p className='opacity-80'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
        <div className='space-x-4'>
          <button className='btn bg-white rounded-full text-[#9415FA] text-base'>Explore Products</button>
          <button className='btn bg-transparent rounded-full text-white text-base'>View Pricing</button>
        </div>
        <p className='opacity-80'>14-day free trial. No credit card required. Cancel anytime.</p>
      </div>
    </div>
  );
};

export default BottomBanner;