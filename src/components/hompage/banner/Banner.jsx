import React from 'react';

const Banner = () => {
  return (
    <div className='flex w-11/12 mx-auto lg:w-5/6 items-center mt-20 gap-30'>
      <div className='space-y-5 flex-1'>
        <p className='bg-[#E1E7FF] text-[#8000ff] py-2 px-6 rounded-3xl w-fit'>New: AI-Powered Tools Available</p>
        <h2 className='text-7xl font-bold'>Supercharge Your Digital Workflow</h2>
        <p>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products</p>
        <div className='space-x-3'>
          <button className="bg-linear-to-r from-[#632EF7] to-[#9415FA] text-white btn rounded-3xl">Explore Products</button>
          <button className='btn btn-primary btn-outline rounded-3xl'><img src="/src/assets/Play.png" alt="" />Watch Demo</button>
        </div>
      </div>
      <div>
        <img src="/src/assets/banner.png" alt=""/>
      </div>
    </div>
  );
};

export default Banner;