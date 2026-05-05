import React from "react";
import Header from "../components/Header";
import Footer from "./Footer";
function Pricing() {
  return (
    <>
      <Header></Header>
      <div>
        <div className="justify-items-center mt-10">
          <p className="  text-5xl md:text-5xl font-bold leading-tight ">
            Flexible Pricing plans
            <br/>
          </p>
          <p className=" mt-10">
            Choose a plan that fits your business. Start free and upgrade
            anytime.
          </p>
        </div>

        <div className="flex items-center  justify-center mt-20 gap-4 ">
          <span className="text-xl font-semibold">Monthly</span>
          <div className="flex -space-x-7">
            <div className="w-15 h-8 bg-gray-500 rounded-full"></div>
            <div className="w-6 h-8 bg-white rounded-full"></div>
          </div>
          <span className="text-xl font-semibold">Annually</span>
        </div>

        <div className="bg-white min-h-screen flex items-center justify-center">
          <div className="grid md:grid-cols-3 gap-6 p-6 max-w-5xl w-full">
            <div className="bg-white p-6 rounded-xl border">
              <h2 className="font-semibold text-lg">Basic</h2>
              <p className="text-sm ">demo1 dwsc</p>
              <h1 className="text-2xl font bold mt-4">
                1000
                <span className="trxt-sm ">/month</span>
              </h1>
              <button className="w-full mt-6 border border-blue-700 text-blue-700 py-2 rounded">
                Choose plan
              </button>
              <p className="text-sm text-gray-500 mt-5">
                48-month plan at 11,999 - save 50% <br />
                Auto-renews at 499/month after the inital term.
              </p>
              <hr className="my-4" />
              <h3 className="font bold mt-5">
                <p>Manage 1 Businessbr </p>
                <p>Access for 1 User + 1 CA </p>
                <p>Auto sync across unlimited devices </p>
              </h3>
              <hr className="my-4" />
              <ul className="list-disc pl-5 space-y-1">
                <li>Dashnoard</li>
                <li>Billing & Invoicing</li>
                <li>Inventory Management</li>
                <li>GST & Tax Management</li>
                <li>Reports & Analytics</li>
                <li>Point of Sale</li>
                <li>Opening Balance</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border">
              <h2 className="font-semibold text-lg">Premium</h2>
              <p className="text-sm ">demoo22</p>
              <h1 className="text-2xl font bold mt-4">
                2000
                <span className="trxt-sm ">/month</span>
              </h1>
              <button className="w-full mt-6 border border-blue-700 text-white bg-blue-700 py-2 rounded">
                Choose plan
              </button>
              <p className="text-sm text-gray-500 mt-5">
                48-month plan at 11,999 - save 50% <br />
                Auto-renews at 499/month after the inital term.
              </p>
              <hr className="my-4" />
              <h3 className="font bold mt-5">
                <p>Manage 1 Businessbr </p>
                <p>Access for 1 User + 1 CA </p>
                <p>Auto sync across unlimited devices </p>
              </h3>
              <hr className="my-4" />
              <ul className="list-disc pl-5 space-y-1">
                <li>Dashnoard</li>
                <li>Billing & Invoicing</li>
                <li>Inventory Management</li>
                <li>GST & Tax Management</li>
                <li>Reports & Analytics</li>
                <li>Point of Sale</li>
                <li>Opening Balance</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border">
              <h2 className="font-semibold text-lg">Cloud Startup</h2>
              <p className="text-sm ">best demo</p>
              <h1 className="text-2xl font bold mt-4">
                5000
                <span className="trxt-sm ">/month</span>
              </h1>
              <button className="w-full mt-6 border border-blue-700 text-blue-700 py-2 rounded">
                Choose plan
              </button>
              <p className="text-sm text-gray-500 mt-5">
                48-month plan at 11,999 - save 50% <br />
                Auto-renews at 499/month after the inital term.
              </p>
              <hr className="my-4" />
              <h3 className="font bold mt-5">
                <p>Manage 1 Businessbr </p>
                <p>Access for 1 User + 1 CA </p>
                <p>Auto sync across unlimited devices </p>
              </h3>
              <hr className="my-4" />
              <ul className="list-disc pl-5 space-y-1">
                <li>Dashnoard</li>
                <li>Billing & Invoicing</li>
                <li>Inventory Management</li>
                <li>GST & Tax Management</li>
                <li>Reports & Analytics</li>
                <li>Point of Sale</li>
                <li>Opening Balance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Pricing;
