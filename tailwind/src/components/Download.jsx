import React from "react";
import windowImg from "../assets/window.webp";
import macImg from "../assets/mac.webp";
import Header from "../components/Header";
import Footer from "./Footer";
import billingImg from "../assets/billing.webp";
function Download() {
  const data = [
    {
      date: "3/25/2026",
      title: "BissBill latest Version",
      version: "2.0.0",
      size: "50mb (approx)",
    },
    {
      date: "3/25/2026",
      title: "BissBill Mac",
      version: "1.0.1",
      size: "70mb (approx)",
    },
    {
      date: "3/25/2026",
      title: "BissBill setup",
      version: "1.0.0",
      size: "50mb (approx)",
    },
  ];

  return (
    <>
      <Header></Header>
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold">Billing Software for PC</h1>
          <p className="text-gray-500 mt-3">
            Simple and efficient billing software to manage invoices, payments,
            and inventory.
          </p>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-3 text-gray-500 font-medium border-b pb-3">
            <p>Date</p>
            <p>Details</p>
            <p className="text-right">Download</p>
          </div>

          {data.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 items-center py-6 border-b"
            >
              <p className="text-gray-500">{item.date}</p>

              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-gray-500 text-sm">Version: {item.version}</p>
              </div>

              <div className="flex justify-end items-center gap-2">
                <span className="text-xl"></span>
                <span className="text-gray-500 text-sm">{item.size}</span>
              </div>
            </div>
          ))}

          <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
            <div>
              <h1 className="text-4xl font-bold mb-6 mt-4">
                {" "}
                Works On Windows
              </h1>

              <li className="text-gray-600 mt-4">
                Fast and Smooth Performance
              </li>
              <li className="text-gray-600 mt-4">
                Offline Billing without internet
              </li>
              <li className="text-gray-600 mt-4">Secure Local Data Storage</li>
              <li className="text-gray-600 mt-4">Easy Installation Setup</li>
              <li className="text-gray-600 mt-4">
                Stable And Reliable Desktop Use
              </li>
              <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
                Download for Windows
              </button>
            </div>

            <div>
              <img src={windowImg} alt="window app" />
            </div>
          </div>

          <div>
            <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
              <div>
                <img src={macImg} alt="mac app" />
              </div>

              <div>
                <h1 className="text-4xl font-bold mb-6 mt-4"> Works On Mac</h1>

                <li className="text-gray-600 mt-4">
                  Fast and Smooth Performance
                </li>
                <li className="text-gray-600 mt-4">
                  Offline Billing without internet
                </li>
                <li className="text-gray-600 mt-4">
                  Secure Local Data Storage
                </li>
                <li className="text-gray-600 mt-4">Easy Installation Setup</li>
                <li className="text-gray-600 mt-4">
                  Stable And Reliable Desktop Use
                </li>
                <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
                  Download for Mac
                </button>
              </div>
            </div>
            <div></div>
          </div>

          <div></div>
        </div>
      </div>
      <div>
        {" "}
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

      <Footer></Footer>
    </>
  );
}

export default Download;
