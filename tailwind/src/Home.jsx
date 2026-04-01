import React from 'react'
import bgimage from './assets/bgimage.png'
import invoice from './assets/invoice.png'
import rocket from './assets/rocket.png'
import man from './assets/man.png'
import Rectangle from './assets/Rectangle.png'
import Frame from './assets/Frame.png';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";


function Home() {
    return (
        <div className=" min-h-screen  bg-white">
            <nav className="flex justify-between items-center px-10 py-4 border-b ">
                <img src={Frame} alt="logo" />
                <ul className='hidden md:flex gap-8 text-gray-600 '>
                    <li>Home</li>
                    <li>Feature </li>
                    <li>Pricing</li>
                    <li>Dowonload</li>
                    <li>Blog</li>
                </ul>
                <button className='bg-blue-500 text-white px-5 py-2 rounded-lg'> Login / Sign up</button>

            </nav>
            <section className='text-center px-6 py-16 md:py-24'>
                <p className='text-4xl md:text-6xl font-bold leading-tight '>
                    All-In-One Billing That Grow <br />
                    <span className='text-blue-500'>Your Business</span>
                </p>
                <p className='text-gray-500 mt-6'>
                    Create GST invoices manage inventory track payments and automate reports everything <br />
                    your business needs to bill smarter and faster

                </p>
                <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-8'>
                    <button className='border border-gray-300 px-6 py-3 rounded hover:bg-gray-100'>
                        View Demo
                    </button>
                    <button className='bg-blue-500 text-white px-6 py-3 rounded hover:bg-gray-600'>
                        Start Free Trail

                    </button>

                </div>

            </section>

            <div className="min-h-screen bg-gray-100 p-6">
                <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-md border-4 border-blue-100 flex overflow-hidden">

                    {/* Sidebar */}
                    <div className="w-64 bg-gray-50 p-6 border-r">
                        <h2 className="text-xl font-semibold mb-8">Email Outreach</h2>

                        <div className="space-y-6 text-sm">
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2">Workspace</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>Dashboard</li>
                                    <li>Contacts</li>
                                    <li>Companies</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2">Pipeline</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>Leads</li>
                                    <li>Deals</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2">Communication</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>Emails</li>
                                    <li>Calls</li>
                                    <li>SMS</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2">Settings</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>Account</li>
                                    <li>Users</li>
                                    <li className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg font-medium">
                                        Billing and Invoice
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-8">
                        <h1 className="text-2xl font-semibold text-gray-800">Billing</h1>
                        <p className="text-sm text-gray-500 mb-6">
                            Effortlessly handle your billing and invoices right here.
                        </p>

                        {/* Top Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {/* Plan Summary */}
                            <div className="border rounded-xl p-5">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="font-semibold text-gray-800">Current Plan Summary</h2>
                                    <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md">
                                        Upgrade
                                    </button>
                                </div>

                                <div className="grid grid-cols-3 gap-4 text-sm mb-4">
                                    <div>
                                        <p className="text-gray-400 text-xs">PLAN NAME</p>
                                        <p className="font-medium">Growth Plan</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs">BILLING CYCLE</p>
                                        <p className="font-medium">Monthly</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs">PLAN COST</p>
                                        <p className="font-medium">$5698</p>
                                    </div>
                                </div>

                                <p className="text-xs text-gray-400 mb-1">USAGE</p>
                                <p className="text-sm text-gray-600 mb-3">
                                    4850 out of 5k monthly active users
                                </p>
                                <div className="w-full bg-gray-200 h-3 rounded-full">
                                    <div className="bg-blue-500 h-3 rounded-full w-[88%]"></div>
                                </div>
                            </div>


                            <div className="border rounded-xl p-5">
                                <h2 className="font-semibold text-gray-800 mb-4">Payment Method</h2>
                                <div className="border rounded-xl p-4 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                                            <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                                        </div>
                                        <div>
                                            <p className="font-medium text-sm">Master Card</p>
                                            <p className="text-xs text-gray-500">**** **** **** 4002</p>
                                            <p className="text-xs text-gray-400">Expiry on 20/2024</p>
                                        </div>
                                    </div>
                                    <button className="border px-3 py-1 rounded-md text-sm text-gray-600">
                                        Change
                                    </button>
                                </div>
                            </div>


                        </div>


                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800">Invoice</h2>
                                    <p className="text-sm text-gray-500">
                                        Effortlessly handle your billing and invoices right here.
                                    </p>
                                </div>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm">
                                    Download
                                </button>
                            </div>

                            <table className="w-full text-sm">

                                {/* Table Head */}
                                <thead>
                                    <tr className="text-left text-gray-500 border-b">
                                        <th className="py-2">Invoice ID</th>
                                        <th>Billing Date</th>
                                        <th>Plan</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                {/* Table Body */}
                                <tbody className="text-gray-700">

                                    <tr className="border-b">
                                        <td className="py-2">#23456</td>
                                        <td>23 Jan 2023</td>
                                        <td>Basic Plan</td>
                                        <td>$1200</td>
                                        <td>
                                            <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
                                                Paid
                                            </span>
                                        </td>
                                    </tr>

                                    <tr className="border-b">
                                        <td className="py-2">#56489</td>
                                        <td>23 Feb 2023</td>
                                        <td>Pro Plan</td>
                                        <td>$7000</td>
                                        <td>
                                            <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
                                                Paid
                                            </span>
                                        </td>
                                    </tr>

                                    <tr className="border-b">
                                        <td className="py-2">#56489</td>
                                        <td>23 Mar 2023</td>
                                        <td>Pro Plan</td>
                                        <td>$7000</td>
                                        <td>
                                            <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
                                                Paid
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2">#98380</td>
                                        <td>23 Apr 2023</td>
                                        <td>Growth Plan</td>
                                        <td>$5698</td>
                                        <td>
                                            <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
                                                Paid
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2">#90394</td>
                                        <td>23 May 2023</td>
                                        <td>Basic Plan</td>
                                        <td>$1200</td>
                                        <td>
                                            <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
                                                Paid
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2">#929348</td>
                                        <td>23 Jan 2023</td>
                                        <td>Growth Plan</td>
                                        <td>$1200</td>
                                        <td>
                                            <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
                                                Paid
                                            </span>
                                        </td>
                                    </tr>

                                </tbody>

                            </table>
                        </div>

                    </div>

                </div>
            </div>
            <div className='justify-items-center' >
                <p className='  text-3xl md:text-5xl font-bold leading-tight '>
                    Features of our invoice <br />

                </p>
                <p className='text-gray-500 mt-6'>
                    Everything you need to bill faster manage better and scale your bussiness powered by automationbr </p>
                <p className='justify-center text-gray-500'>                                    accuracy and simplicity
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
                <p className='text-gray-500 mt-6'>
                    Send professional invoices track payment and reduce delays </p>
                <p className='justify-center text-gray-500'>  Automatically
                </p>
            </div>
            <div className='p-15'>
                <img src={invoice} alt="image" />
            </div>

            <div className="bg-gray-100 py-12 ">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-gray-800">Why Choose Us</h1>
                        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
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
                                    <p className="text-sm text-gray-600 mt-2">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        lorem ipsum has been the industry standard dummy text ever since the 1500s.
                                    </p>
                                </div>


                                <div className="bg-gray-200 p-6 rounded-xl">
                                    <img src={rocket} alt="image" />
                                    <h2 className="font-semibold text-lg">Faster Payments</h2>
                                    <p className="text-sm text-gray-600 mt-2">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        lorem ipsum has been the industry standard dummy text ever since the 1500s.
                                    </p>
                                </div>

                            </div>

                            <div className="bg-gray-200 p-6 rounded-xl">
                                <img src={rocket} alt="image" />
                                <h2 className="font-semibold text-lg">Real-Time Inventory</h2>
                                <p className="text-sm text-gray-600 mt-2">
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

                            <button className="mt-6 bg-blue-500 px-4 py-2 rounded-md text-sm">
                                Log in / Sign up
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className='justify-items-center mt-10' >
                <p className='  text-3xl md:text-5xl font-bold leading-tight '>
                    Flecible Pricing plans<br />

                </p>
                <p className='text-gray-500 mt-10'>
                    Choose a plan that fits your bussiness. Start free and upgrade anything Powerful billing tools at </p>
                <p className='justify-center text-gray-500'> a price that makes sense.
                </p>
            </div>

            <div className='flex items-center  justify-center mt-20 gap-4 '>
                <span className='text-xl font-semibold'>Monthly</span>
                <div className="flex -space-x-7">
                    <div className="w-15 h-8 bg-gray-500 rounded-full"></div>
                    <div className="w-6 h-8 bg-white rounded-full"></div>
                </div>
                <span className='text-xl font-semibold'>Annually</span>
            </div>

            <div className="bg-white min-h-screen flex items-center justify-center">
                <div className='grid md:grid-cols-3 gap-6 p-6 max-w-5xl w-full'>
                    <div className='bg-white p-6 rounded-xl border'>
                        <h2 className='font-semibold text-lg'>Basic</h2>
                        <p className='text-sm text-gray-500'>lorem ipsum is a dummy text used in</p>
                        <h1 className='text-2xl font bold mt-4'>750
                            <span className='trxt-sm text-gray-500'>/month</span>
                        </h1>
                        <button className='w-full mt-6 border border-blue-500 text-blue-500 py-2 rounded'>
                            Choose plan
                        </button>
                        <p className='text-sm text-gray-500 mt-5'>
                            48-month plan at 11,999 - save 50% <br />
                            Auto-renews at 499/month after the inital term.
                        </p>
                        <hr className='my-4' />
                        <h3 className='font bold mt-5'>
                            <p>Manage 1 Businessbr </p>
                            <p>Access for 1 User + 1 CA </p>
                            <p>Auto sync data across unlimited devices </p>
                        </h3>
                        <hr className='my-4' />
                        <ul className='list-disc pl-5 space-y-1'>
                            <li>Dashnoard</li>
                            <li>items</li>
                            <li>company</li>
                            <li>HSH</li>
                            <li>Manufacturer Name</li>

                        </ul>
                    </div>
                    <div className='bg-white p-6 rounded-xl border'>
                        <h2 className='font-semibold text-lg'>Premium</h2>
                        <p className='text-sm text-gray-500'>lorem ipsum is a dummy text used in</p>
                        <h1 className='text-2xl font bold mt-4'>750
                            <span className='trxt-sm text-gray-500'>/month</span>
                        </h1>
                        <button className='w-full mt-6 border border-blue-500 text-blue-500 py-2 rounded'>
                            Choose plan
                        </button>
                        <p className='text-sm text-gray-500 mt-5'>
                            48-month plan at 11,999 - save 50% <br />
                            Auto-renews at 499/month after the inital term.
                        </p>
                        <hr className='my-4' />
                        <h3 className='font bold mt-5'>
                            <p>Manage 1 Businessbr </p>
                            <p>Access for 1 User + 1 CA </p>
                            <p>Auto sync data across unlimited devices </p>
                        </h3>
                        <hr className='my-4' />
                        <ul className='list-disc pl-5 space-y-1'>
                            <li>Dashnoard</li>
                            <li>items</li>
                            <li>company</li>
                            <li>HSH</li>
                            <li>Manufacturer Name</li>

                        </ul>
                    </div>
                    <div className='bg-white p-6 rounded-xl border'>
                        <h2 className='font-semibold text-lg'>Cloud Startup</h2>
                        <p className='text-sm text-gray-500'>lorem ipsum is a dummy text used in</p>
                        <h1 className='text-2xl font bold mt-4'>750
                            <span className='trxt-sm text-gray-500'>/month</span>
                        </h1>
                        <button className='w-full mt-6 border border-blue-500 text-blue-500 py-2 rounded'>
                            Choose plan
                        </button>
                        <p className='text-sm text-gray-500 mt-5'>
                            48-month plan at 11,999 - save 50% <br />
                            Auto-renews at 499/month after the inital term.
                        </p>
                        <hr className='my-4' />
                        <h3 className='font bold mt-5'>
                            <p>Manage 1 Businessbr </p>
                            <p>Access for 1 User + 1 CA </p>
                            <p>Auto sync data across unlimited devices </p>
                        </h3>
                        <hr className='my-4' />
                        <ul className='list-disc pl-5 space-y-1'>
                            <li>Dashnoard</li>
                            <li>items</li>
                            <li>company</li>
                            <li>HSH</li>
                            <li>Manufacturer Name</li>

                        </ul>
                    </div>
                </div>
            </div>
            < div className='justify-items-center mt-10' >
                <p className='  text-3xl md:text-5xl font-bold leading-tight '>
                    What Our customer Say<br />

                </p>
                <p className='text-gray-500 mt-10'>
                    See how our billing solution helps bussinesses save time ,stramline operations, and grow  </p>
                <p className='justify-center text-gray-500'>
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
                            <p className='text-gray-600 text-sm'>
                                Lorem ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <div className=' flex items-center gap-3 mt-6'>
                                <div className='w-12 h-12 bg-white rounded-full'>
                                    <img src={man} alt="man" />
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
                                    <img src={man} alt="man" />
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
                    /10 |Based on 43,403 reviews
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
                        <button className='bg-blue-500 text-white px-5 py-2 rounded-md'>
                            Start Free -
                        </button>
                    </div>
                    <div>
                        <img src={Rectangle} alt="image" />
                    </div>
                </div>
            </div>
            <div className='bg-gray-200 mt-4' >
                <img src={Frame} alt="img" />
                
                <div className='flex justify-end gap-5 text-2xl text-gray-500 px-4 m-4 -mt-4'>
                <span><FaXTwitter /></span>
                <span><FaFacebook /></span>
                <span><IoLogoWhatsapp /></span>
                <span><FaInstagram /></span>
                <span><FaLinkedinIn /></span>
                <span><FaTelegram /></span>
                <span><IoLogoYoutube /></span>
            </div>
            <div className='col-span-3'>
               <ul className='font-semibold'>Quick links</ul>
               <li>Home</li>
               <li>Feautures</li>
               <li>Pricing</li>
                <li>Downloads</li>
                <li>Resources</li>  
                <li>FAQs</li>
                <li>Blog</li>
                <li>Tsetimonials</li>
                <li>About us</li>
                <li>Help Center</li>           
            </div>
            </div>

        </div >

    )
}

export default Home;