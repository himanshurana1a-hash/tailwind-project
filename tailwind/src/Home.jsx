import React from 'react'
import bgimage from "./assets/bgimage.png";
import invoice1 from "./assets/invoice1.webp";
import rocket from "./assets/Rocket.png";
import man from "./assets/man.png";
import women from "./assets/women.png";
import HeroBilling from "./assets/HeroBilling.webp";
import Rectangle from "./assets/Rectangle.png";
import Frame from "./assets/Frame.png";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom'
import Header from "./components/Header";
import Footer from './components/Footer'
function Home() {
    return (
        <>
        <Header></Header>
       
        <div className="flex justify-center bg-blue-50">
     <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 shadow-sm bg-blue-50 mt-6">
    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
    <p className="text-sm text-blue-600 font-medium">
      Smart Billing for Smart Business</p>
  </div>
</div>
        
            <section className='text-center px-6 py-16 md:py-24 bg-blue-50'>
                <p className='text-4xl md:text-6xl font-bold leading-tight '>
                    India's #1 GST Billing Software for <br />
                    <span className='text-blue-700'>Smart Business</span>
                </p>
                <p className=' mt-6'>
                    Create GST invoices manage inventory ,track payments and automate reports everything <br />
                    your business needs to bill smarter and faster.

                </p>
                <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-8'>
                    <button className='border border-gray-300 px-6 py-3 rounded hover:bg-gray-100'>
                        View Demo
                    </button>
                    <button className='bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-gray-600'>
                        Start Free Trail

                    </button>

                </div>

            </section>
            <div className='px-4 py-4'>
                <img src={HeroBilling} alt="Billing"  className='rounded-2xl '/>
            </div>
          <div className='justify-items-center' >
                <p className='  text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mt-8 '>
                    Everything Your Business Needs to   </p>
                <p className='text-2xl sm:text-3xl md:text-5xl font-bold leading-tight '> Bill Smarter </p> <br />

              
                <p className=' mt-6'>
                   From GST invoicing to inventory, payments to analytics BissBill is the only GST billing software your </p>
                   <p> business will ever need. Built for Indian small businesses, designed for simplicity.</p>
                <p className='justify-center text-gray-500'>                                    
                </p>
            </div>

            <span className='text-blue-700 underline flex justify-end px-18'>View all-</span>
            <div className=' max-w-6xl mx-auto px-4 grid grid-cols-2 gap-6 p-6'>
                <div className=' rounded-lg p-4 shadow-sm'>
                    <h2 className='font-semibold text-sm mb-2'>Auto Discount Engine</h2>
                    <p>Automatically suggests the best discount for a customer based on thier purchase history and loyality level .
                        <img src={bgimage} alt="bg-img" />
                    </p>
                </div>

                <div className=' rounded-lg p-4 shadow-sm'>
                    <h2 className='font-semibold text-sm mb-2'>Auto Discount Engine</h2>
                    <p> Automatically suggests the best discount for a customer based on their purchase history and loyality level.
                        <img src={bgimage} alt="bg-img" />
                    </p>
                </div>

                <div className=' rounded-lg p-4 shadow-sm'>
                    <h2 className='font-semibold text-sm mb-2'>Auto Discount Engine</h2>
                    <p> Automatically suggests the best discount for a customer based on their purchase history and loyality level.
                        <img src={bgimage} alt="bg-img" />
                    </p>
                </div>

                <div className=' rounded-lg p-4 shadow-sm'>
                    <h2 className='font-semibold text-sm mb-2 '>Auto Discount Engine</h2>
                    <p> Automatically suggests the best discount for a customer based on their purchase history and loyality level.
                        <img src={bgimage} alt="bg-img" />
                    </p>
                </div>
            </div>

            <div className='justify-items-center' >
                <p className='  text-3xl md:text-5xl font-bold leading-tight '>
                    Invoices <br />

                </p>
                <p className=' mt-6'>
                    Create GST-ready invoices instantly, share them via WhatsApp or Email, and track every payment all from </p>
                <p className='justify-center '> India's easiest GST billing software. </p>
            </div>
            <div className='p-15'>
                <img src={invoice1} className="w-full max-w-4xl mx-auto" alt="image" />
            </div>

            <div className=" py-12 p-8 ">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-gray-800">Why Choose Us</h1>
                        <p className="mt-2 max-w-2xl mx-auto">
                            Everything you need to create invoices, track payments, manage inventory,
                            and run your business more efficiently from one platform.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-gray-200 p-6 rounded-xl">
                                    <img src={rocket} alt="image" />
                                    <h2 className="font-semibold text-lg">Business Growth</h2>
                                    <p className="text-sm  mt-2">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        lorem ipsum has been the industry standard dummy text ever since the 1500s.
                                    </p>
                                </div>


                                <div className="bg-gray-200 p-6 rounded-xl">
                                    <img src={rocket} alt="image" />
                                    <h2 className="font-semibold text-lg">Faster Payments</h2>
                                    <p className="text-sm mt-2">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        lorem ipsum has been the industry standard dummy text ever since the 1500s.
                                    </p>
                                </div>

                            </div>

                            <div className="bg-gray-200 p-6 rounded-xl">
                                <img src={rocket} alt="image" />
                                <h2 className="font-semibold text-lg">Real-Time Inventory</h2>
                                <p className="text-sm mt-2">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    lorem ipsum has been the industry standard dummy text ever since the 1500s.
                                    it was popularised tn the 1960s with the release of letraset sheet containing Lorem ipsum
                                    passages and more recently with desktop publishing software like
                                    Aldus pageMaker including versions of Lorem ipsum
                                </p>
                            </div>

                        </div>


                        <div className="bg-blue-900 text-white p-6 rounded-xl flex flex-col justify-between">
                            <div>
                                <img src={rocket} alt="image" />
                                <h2 className="text-lg font-semibold">
                                    Free to Start <br /> 45% Features Included
                                </h2>
                                <p className="text-sm mt-3 text-gray-200">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    lorem ipsum has been the industry standard dummy text ever since the 1500s.
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    it has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged

                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    lorem ipsum has been the industry standard dummy text ever since the 1500s.
                                </p>
                            </div>

                            <button className="mt-6 bg-blue-700 w-40 py-2 rounded-md text-sm">
                                Log in / Sign up
                            </button>
                        </div>

                    </div>
                </div>
            </div>

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
     < div className='justify-items-center mt-10' >
                <p className='  text-3xl md:text-5xl font-bold leading-tight '>
                    What Our customer Say<br />

                </p>
                <p className=' mt-10'>
                    See how our billing solution helps bussinesses save time ,stramline operations, and grow  </p>
                <p className='justify-center '>
                    faster with an efficient billing system.
                </p>
            </div>
            <div className="bg-white py-10 px-4">
                <div className='max-w-6xl  mx-auto'>
                    <div className='grid md:grid-cols-3 justify-center gap-6'>
                        <div className='bg-gray-200 p-6 rounded-xl'>
                            <div className='flex justify-between text-blue-600 text-sm mb-3'>
                                <span>★★★★★</span>
                                <span className='text-gray-600'>1 month ago</span>
                            </div>
                            <p className='text-gray-600 text-sm'>
                                Lorem ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <div className=' flex items-center gap-3 mt-6'>
                                <div className='w-12 h-12 bg-gray-400 rounded-full'>
                                    <img src={man} alt="man" />
                                </div>
                                <h3 className='font-semibold'>Full Name</h3>
                                <p className='text-sm text-gray-500'>ceo of company</p>
                            </div>
                        </div>

                        <div className='bg-blue-500 text-white p-6 rounded-xl'>
                            <div className='flex justify-between  text-sm mb-3'>
                                <span>★★★★★</span>
                                <span >1 month ago</span>
                            </div>
                            <p className=' text-sm'>
                                Lorem ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <div className=' flex items-center gap-3 mt-6'>
                                <div className='w-12 h-12 bg-white rounded-full'>
                                    <img src={women} alt="women" />
                                </div>
                                <h3 className='font-semibold'>Full Name</h3>
                                <p className='text-sm text-gray-200'>ceo of company</p>
                            </div>
                        </div>


                        <div className='bg-gray-200 p-6 rounded-xl'>
                            <div className='flex justify-between text-blue-600 text-sm mb-3'>
                                <span>★★★★★</span>
                                <span className='text-gray-600'>1 month ago</span>
                            </div>
                            <p className='text-gray-600 text-sm'>
                                Lorem ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <div className=' flex items-center gap-3 mt-6'>
                                <div className='w-12 h-12 bg-gray-400 rounded-full'>
                                    <img src={women} alt="women" />
                                </div>
                                <h3 className='font-semibold'>Full Name</h3>
                                <p className='text-sm text-gray-500'>ceo of company</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center mt-6'>
                <h2 className='text-xl font-semibold'>
                    Excellent Rating
                    <span className=' text-blue-600'>★★★★★</span>
                </h2>
                <p className='text-gray-600 mt-2 text-sm'>
                    <span className='font-semibold'>7.2</span>
                    /10 |Based on 43,403 reviews | <span className='text-blue-700 text-xl'>★ </span>Feedback
                </p>
            </div>

            < div className='justify-items-center mt-10' >
                <p className='  text-3xl md:text-5xl font-bold leading-tight '>
                    Frequently Asked Questions </p>

                <div className='border rounded-lg bg-white p-4 mt-6 cursor-pointer'>
                    <p className='text-sm w-2xl mt-2 '>
                        Is the billing software really free to use?
                    </p>
                </div>
                <div className='border rounded-lg bg-white p-4 mt-6 cursor-pointer'>
                    <p className='text-sm w-2xl mt-2 '>
                        Is the billing software really free to use?</p>
                </div>
                <div className='border rounded-lg bg-white p-4 mt-6 cursor-pointer'>
                    <p className='text-sm w-2xl mt-2 '>
                        Is the billing software really free to use?</p>
                </div>
                <div className='border rounded-lg bg-white p-4 mt-6 cursor-pointer'>
                    <p className='text-sm  w-2xl mt-2 '>
                        Is the billing software really free to use?</p>
                </div>
            </div>

            <div className='bg-white p-6 justify-items-center'>
                <div className='max-w-6xl max-auto bg-gray-200 rounded-2xl p-8 grid md:grid-cols-2 gap-6 items-center'>
                    <div>
                        <h1 className='text-2xl md:text-3xl font-bold mb-4'>
                            Ready to Make Billing Effortless?
                        </h1>
                        <p className='text-gray-600 mb-6'>
                            Create professional GST invoices, track payments, manage inventory,
                            and monitor your business — all from one simple, secure billing platform.
                            No stress,just smart billing built for growing bussinesses.
                        </p>
                        <button className='bg-blue-700 text-white px-5 py-2 rounded-md'>
                            Start Free -
                        </button>
                    </div>
                    <div>
                        <img src={Rectangle} alt="image" />
                    </div>
                </div>
            </div>
        
        <Footer></Footer>
</>
    )
}

export default Home;