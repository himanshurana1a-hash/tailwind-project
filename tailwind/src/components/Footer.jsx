import React from "react";
import Logo from "../assets/logo.webp";
import logo1 from "../assets/logo1.webp";
import { Link } from "react-router-dom";

import { FaXTwitter, FaInstagram, FaTelegram } from "react-icons/fa6";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp, IoLogoYoutube } from "react-icons/io";

function Footer() {
  return (
    <div className="bg-gray-200 mx-auto p-8">

      {/* Top Section */}
      <div className="space-y-2 max-w-6xl mx-auto">

        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="logo" className="w-10 h-10" />
          <h1 className="text-3xl font-bold text-blue-800">Biss Bill</h1>
        </div>

        <p className="text-sm text-blue-800">
          Smart Billing For Smart Business
        </p>

        {/* Social Icons */}
        <div className="flex justify-end gap-5 text-2xl text-gray-500 pb-4 border-b-2">
          <FaXTwitter className="cursor-pointer hover:text-black" />
          <FaFacebook className="cursor-pointer hover:text-blue-600" />
          <IoLogoWhatsapp className="cursor-pointer hover:text-green-500" />
          <FaInstagram className="cursor-pointer hover:text-pink-500" />
          <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
          <FaTelegram className="cursor-pointer hover:text-blue-500" />
          <IoLogoYoutube className="cursor-pointer hover:text-red-600" />
        </div>
      </div>

      {/* Links Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto p-4 mt-6">

        <ul className="space-y-2">
          <li className="font-semibold">Quick Links</li>
          <li><Link to="/">Home</Link></li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Downloads</li>
          <li>Resources</li>
          <li>Blog</li>
          <li>News</li>
        </ul>

        <ul className="space-y-2">
          <li className="font-semibold">Popular Services</li>
          <li>GST Billing Software</li>
          <li>Stock Management</li>
          <li>Invoice Generator</li>
          <li>POS Billing System</li>
        </ul>

        <ul className="space-y-2">
          <li className="font-semibold">Company</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Refund Policy</li>
          <li>Cancellation Policy</li>
        </ul>

        <ul className="space-y-2">
          <li className="font-semibold">Support</li>
          <li>Contact Us</li>
          <li>Help & Support</li>
          <li>Video Tutorials</li>
        </ul>

      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-6">
        © 2026 Biss Bill. All rights reserved.
      </div>

    </div>
  );
}

export default Footer;