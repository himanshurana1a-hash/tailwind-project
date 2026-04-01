import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
   <footer className='bg-gray-800 text-olive-500 py-12'>
    <div className='max-w-6xlte mx-auto px-6 grid md:grid-cols-5 gap-8'>

      <div>
        <h2 className='text-white text-xl font-semibold'>DEVELOPER</h2>
        <p className='text-sm mt-2'>IT Services & IT consulting</p>

        <p className='mt-4 text-sm'>
          Dehradhunr <br />
          Uttarakhand, India -248001
         </p>
      </div>
      <div>
          <h3 className='text-white font-semibold mb-2'>Quick Links</h3>
          <ul className='space-y-1 test-sm'>

            <li>Home</li>
            <li>About</li>
            <li>Services</li>
          </ul>
      </div>
        <div>
          <h3 className='text-white font-semibold mb-2'>Solutions</h3>
          <ul className='space-y-1 test-sm'>

            <li>Web Developers</li>
            <li>App Developer</li>
            <li>Graphic Designing</li>
            <li>Digital Markting</li>
          </ul>
      </div>
        <div>
          <h3 className='text-white font-semibold mb-2'>Career</h3>
          <ul className='space-y-1 test-sm'>

            <li>Jobs</li>
            <li>Internship</li>
            <li>Training</li>
          </ul>
      </div>
       <div>
          <h3 className='text-white font-semibold mb-2'>Follow us</h3>
          <div className='space-y-1 test-sm'>

            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
          </div>
       </div>

      </div>
  
   </footer>
  );
}

export default Footer;