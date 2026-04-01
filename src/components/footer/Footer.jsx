import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='bg-[#101727] text-white'>
      <div className='w-11/12 mx-auto lg:w-5/6 py-10 lg:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 text-center md:text-left'>

          <div className='lg:col-span-2'>
            <a className="text-3xl font-bold text-white">DigiTools</a>
            <p className='opacity-60 text-sm pt-3'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
          </div>

          <div className='space-y-3'>
            <h3 className='font-bold text-base'>Product</h3>
            <ul className='space-y-2 text-sm opacity-60'>
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div className='space-y-3'>
            <h3 className='font-bold text-base'>Company</h3>
            <ul className='space-y-2 text-sm opacity-60'>
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          <div className='space-y-3'>
            <h3 className='font-bold text-base'>Resources</h3>
            <ul className='space-y-2 text-sm opacity-60'>
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className='space-y-3'>
            <h3 className='font-bold text-base'>Social Links</h3>
            <div className='flex gap-4 justify-center md:justify-start'>
              <div className='bg-white rounded-full p-2 cursor-pointer hover:opacity-80'>
                <FaXTwitter className='text-xl text-black' />
              </div>
              <div className='bg-white rounded-full p-2 cursor-pointer hover:opacity-80'>
                <FaFacebook className='text-xl text-black' />
              </div>
              <div className='bg-white rounded-full p-2 cursor-pointer hover:opacity-80'>
                <FaInstagram className='text-xl text-black' />
              </div>
            </div>
          </div>

        </div>

        <div className='border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center'>
          <p className='text-sm opacity-60'>© 2026 Digitools. All rights reserved.</p>
          <div className='flex gap-6 text-sm opacity-60'>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;