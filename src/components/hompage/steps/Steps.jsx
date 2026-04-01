import React from 'react';
import userImg from '../../../assets/user.png';
import packageImg from '../../../assets/package.png';
import rocketImg from '../../../assets/rocket.png';

const Steps = () => {
  return (
    <div className='bg-base-200 mt-10 lg:mt-20'>
      <div className='w-11/12 mx-auto lg:w-5/6 py-15 md:py-20'>
        <div className='text-center'>
          <h2 className='font-semibold text-5xl'>Get Started in 3 Steps</h2>
          <p className='pt-2 pb-8'>Start using premium digital tools in minutes, not hours.</p>
        </div>

        <div className='flex flex-col md:flex-row justify-center gap-10'>
          <div className='bg-base-100 py-4 px-8 rounded-lg pb-10 shadow space-y-2 flex flex-col items-center text-center'>
            <div className='flex justify-end w-full'>
              <p className='bg-linear-to-r from-[#632EF7] to-[#9415FA] rounded-full px-2 py-1 text-white '>01</p>
            </div>
            <img src={userImg} alt="" className='bg-[#F3E8FE] p-4 rounded-full mt-5' />
            <h3 className='font-bold text-3xl'>Create Account</h3>
            <p>Sign up for free in seconds. No credit card required to get started.</p>
          </div>
          <div className='bg-base-100 py-4 px-8 rounded-lg pb-10 shadow space-y-2 flex flex-col items-center text-center'>
            <div className='flex justify-end w-full'>
              <p className='bg-linear-to-r from-[#632EF7] to-[#9415FA] rounded-full px-2 py-1 text-white '>02</p>
            </div>
            <img src={packageImg} alt="" className='bg-[#F3E8FE] p-4 rounded-full mt-5' />
            <h3 className='font-bold text-3xl'>Choose Products</h3>
            <p>Browse our catalog and select the tools that fit your needs.</p>
          </div>
          <div className='bg-base-100 py-4 px-8 rounded-lg pb-10 shadow space-y-2 flex flex-col items-center text-center'>
            <div className='flex justify-end w-full'>
              <p className='bg-linear-to-r from-[#632EF7] to-[#9415FA] rounded-full px-2 py-1 text-white '>03</p>
            </div>
            <img src={rocketImg} alt="" className='bg-[#F3E8FE] p-4 rounded-full mt-5' />
            <h3 className='font-bold text-3xl'>Start Creating</h3>
            <p>Download and start using your premium tools immediately.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;