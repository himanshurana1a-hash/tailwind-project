import React from "react";
import Header from "../components/Header";
import Footer from "./Footer";
import aboutus from "../assets/aboutus.png";
import about from "../assets/about.png";
import { FaLightbulb } from "react-icons/fa";
function About() {
  return (
    <>
      <Header></Header>

      <div className="bg-gray-50 min-h-screen py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">
            About BissBill
          </h1>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            India’s Smart GST Billing Software
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            BissBill is a powerful and easy-to-use GST billing software designed
            specially for Indian small businesses. Our mission is simple — to
            help shop owners, retailers, and growing businesses manage billing,
            inventory, and payments without complexity.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We understand that most business owners don’t come from an
            accounting background. That’s why BissBill is built as an easy GST
            billing software for beginners where you can create invoices, track
            stock, and manage your business in just a few clicks.
          </p>
        </div>
        <div>
          <section className="px-6 py-16 md:px-16 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
              <div className="">
                <img
                  src={aboutus}
                  alt="billing software"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Built for Indian Businesses
                </h2>

                <p className="mt-4">
                  BissBill is more than just a tool — it’s a complete billing
                  software solution that covers everything your business needs.
                </p>

                <div className="mt-6 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className=" p-3 "></div>
                    <p className="font-bold">
                      Create GST-compliant invoices instantly
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className=" p-3 "></div>
                    <p className="font-bold">
                      Manage stock with inventory features{" "}
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className=" p-3 "></div>
                    <p className="font-bold">
                      Track payments and dues in real-time
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 "></div>
                    <p className="font-bold">
                      Access reports and business insights
                    </p>
                  </div>
                  <div>
                    <h3>
                      Whether you run a retail shop, wholesale business, or
                      service company, BissBill works as a reliable online
                      billing software India that simplifies your daily
                      operations.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="px-6 py-16 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="p-3"></div>
              <p className="font-bold">
                Best GST billing software for small business India
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3"></div>
              <p className="font-bold">
                GST billing software with inventory management
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3"></div>
              <p className="font-bold">
                Billing software with barcode scanner India
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3"></div>
              <p className="font-bold">
                Billing software with WhatsApp invoice sharing
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3"></div>
              <p className="font-bold">Billing software for PC Windows India</p>
            </div>
          </div>

          <div>
            <img
              src={about}
              alt="billing software"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      <div>
        <section className="bg-white py-16 px-6 md:px-16 text-center max-w-7xl">
          <div className="flex justify-center mb-6">
            <div className="text-5xl text-blue-500 bg-blue-100 p-4 rounded-full">
              <FaLightbulb />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
            Our Vision
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            We aim to empower every small business owner in India with smart
            technology that saves time, reduces errors, and increases profits.
          </p>

          <p className="mt-6 font-semibold text-gray-800 text-lg">
            "With BissBill, billing is not just faster — it’s smarter."
          </p>
        </section>
      </div>
      <div>
        <section className="bg-white py-20 px-6 md:px-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Start Using BissBill Today
          </h2>

          <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto">
            Create invoices, manage inventory, and grow your business — all in
            one place.
          </p>

          <div className="mt-8">
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg text-lg font-semibold transition pointer-coarse:">
              Get Started Free
            </button>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}

export default About;
