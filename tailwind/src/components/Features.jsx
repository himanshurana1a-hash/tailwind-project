import React from "react";
import Header from "../components/Header";
import Footer from "./Footer";
import Himanshu from "../assets/Himanshu.webp";
import Inventory from "../assets/Inventory.webp";
import billingImg from "../assets/billing.webp";
function Features() {
  return (
    <>
      <Header></Header>
      <div>
        <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Everything Your Business Needs to <br /> Bill Smarter
            </h1>

            <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
              From GST invoicing to inventory, payments to analytics — BissBill
              is the only GST billing software your business will ever need.
            </p>
          </div>

          <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-6">
            <div>
              <img
                src={Himanshu}
                alt="invoice"
                className="rounded-xl shadow-lg border"
              />
              <div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Billing & Invoicing
                  </h2>

                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    Create GST-compliant invoices in seconds with India's
                    easiest GST billing software. Auto-calculates CGST, SGST &
                    IGST — no manual effort, no errors.
                  </p>

                  <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div>
              <img
                src={Inventory}
                alt="inventory"
                className="rounded-xl shadow-lg border"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Inventory Management
                </h2>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  Track your stock in real-time with India's smartest billing
                  software with inventory. Get low stock alerts before you run
                  out never lose a sale again.
                </p>

                <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </section>
        <div>
          <section className="w-full bg-white py-16 px-6 md:px-16">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
              {/* LEFT CONTENT */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Ready to Make Billing Effortless?
                </h1>

                <p className="mt-4 text-gray-500 text-lg">
                  Start managing your business smarter today.
                </p>

                <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition duration-300">
                  Go to Pricing →
                </button>
              </div>

              <div className="flex-1 flex justify-center">
                <img
                  src={billingImg}
                  alt="Dashboard Preview"
                  className="w-full max-w-md md:max-w-lg rounded-xl shadow-lg"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Features;
