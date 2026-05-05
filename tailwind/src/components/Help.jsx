import React from "react";
import Header from "../components/Header";
import Footer from "./Footer";
import helpImg from "../assets/help.webp";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

function Help() {
  return (
    <>
      <Header></Header>

      <section className="px-6 py-16 md:px-16 lg:px-24 bg-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Hello, How can we help you?
            </h1>

            <p className="mt-6 text-gray-500 text-lg">
              Find instant answers to your questions about BissBill — India's
              easiest GST billing software. Search from our help guides,
              tutorials, and support articles below.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={helpImg}
              alt="help dashboard"
              className="w-full max-w-md md:max-w-lg rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
      <div>
       <section className="bg-gray-50 py-16 px-6 md:px-20">
  
  <div className="max-w-6xl mx-auto">

    {/* CONTACT SECTION */}
    <div className="grid md:grid-cols-2 gap-12 items-start">

      {/* LEFT */}
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>

        <p className="text-gray-600 leading-relaxed">
          Can't find what you're looking for? Our support team is here to help.
          Whether you have a question about GST invoicing, inventory setup,
          or pricing plans — just drop us a message.
        </p>

        <div className="space-y-2 text-gray-700">
          <p className="text-lg"><b>Email:</b> bissbill@novanectar.co.in</p>
          <p className="text-lg"><b>Phone:</b> +91 89798 91708</p>
          <p className="text-lg">
            <b>Address:</b> GMS Rd, Haripuram, Kanwali, Dehradun
          </p>
        </div>

        <h2 className="text-lg font-semibold">Follow us On:</h2>

        <div className="flex gap-5 text-2xl text-gray-600">
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          <FaSquareXTwitter className="hover:text-black cursor-pointer" />
          <FaFacebook className="hover:text-blue-600 cursor-pointer" />
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className=" p-6 rounded-2xl shadow-lg space-y-4">

        <input
          type="text"
          placeholder="Name"
          className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="text"
          placeholder="Contact Number"
          className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="text"
          placeholder="Subject"
          className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <textarea
          placeholder="Write a message"
          rows="4"
          className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 hover:scale-[1.02] transition">
          Send Message
        </button>
      </div>
    </div>

    {/* FAQ SECTION */}
    <div className="mt-16 text-center">

      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">

        <div className="border rounded-lg bg-white p-4 cursor-pointer hover:shadow-md transition">
          <p>Is the billing software really free to use?</p>
        </div>

        <div className="border rounded-lg bg-white p-4 cursor-pointer hover:shadow-md transition">
          <p>Can I manage inventory with this software?</p>
        </div>

        <div className="border rounded-lg bg-white p-4 cursor-pointer hover:shadow-md transition">
          <p>Does it support GST invoices?</p>
        </div>

        <div className="border rounded-lg bg-white p-4 cursor-pointer hover:shadow-md transition">
          <p>Is customer support available?</p>
        </div>

      </div>
    </div>

  </div>
</section></div>

      <Footer></Footer>
    </>
  );
}

export default Help;
