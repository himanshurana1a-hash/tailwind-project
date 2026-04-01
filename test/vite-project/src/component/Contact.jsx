import React from 'react'
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useState } from 'react';

function Contact() {
    const [ firstname, setFirstname]= useState('');
    const [ lastname,setLastname]=useState('');
    const[ email,setmail]=useState('');
    const[ phonenumber, setPhoneNumber]=useState('');
    const [query, setQuery] = useState('')
    console.log('firstname : ', firstname)
    console.log('lastname :',lastname)
    console.log('email:',email)
    console.log('phonenumber:',phonenumber);
    console.log('query : ', query)


    const formSubmit=(e)=>{
        e.preventDefault();
        console.log('firstName :', firstname, 'lastName :', lastname, 'email :', email , 'phonenumber :', phonenumber, "Query :", query)
    }
    return (
        <div className='min-h-screen items-center justify-center bg-gray-200 p-10'>
            <div className=' columns-2 m-6 bg white shadow-lg rounded-lg grid-cols-2'>

                <div className="p-6 md:p-10 border-b md:border-b-0 md:border-r">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="text-sm font-semibold">FIRST NAME</label>
                            <input onChange={(e)=> setFirstname(e.target.value)} placeholder='First Name' className="w-full border p-2 mt-2 rounded" />
                        </div>

                        <div>
                            <label className="text-sm font-semibold">LAST NAME</label>
                            <input onChange={(e)=> setLastname(e.target.value)} placeholder='Last Name'
                             className="w-full border p-2 mt-2  rounded" />
                        </div>

                        <div>
                            <label className="text-sm font-semibold">EMAIL</label>
                            <input onChange={(e)=> setmail(e.target.
                            value)} placeholder='@Email'
                             className="w-full border p-2 mt-2 rounded" />
                        </div>

                        <div>
                            <label className="text-sm font-semibold">PHONE NUMBER</label>
                            <input onChange={(e)=> setPhoneNumber(e.target.value)} placeholder='Number'
                             className="w-full border p-2 mt-2 rounded" />
                        </div>
                    </div>

                    <div className='mt-5'>
                        <label className=" text-sm font-semibold">
                            WHAT DO YOU HAVE IN MIND
                        </label>


                        <textarea name='query' onChange={(e)=>setQuery(e.target.value)} row="5" placeholder="please enter quary..." className='w-full border p-3 mt -2 rounded'></textarea>

                    </div>

                    <button onClick={(e)=>formSubmit(e)} className='mt-5 bg-green-700 text-white px-7 py-2 rounded'>
                        Submit
                    </button>
                </div>

                <div className='p-10 '>

                    <h2 className='text-3xl font-bold md-4'>Contact us</h2>
                    <p className='text-gray-500 mb-4'>
                        If you are ready to learn front-end , back - end , or full-stack Contact us at.
                    </p>

                    <div className='space-y-6'>
                        <div className='flex items-center gap-4'>
                            <IoCall />
                            <span>+91-9756859851</span>
                        </div>

                        <div className='flex items-center gap-4'>
                            <IoMdMail />
                            <span>hello@workik.com</span>
                        </div>

                        <div className='flex items-center gap-4'>
                            <FaMapMarkerAlt />
                            <span>102 street,ycross 485656</span>
                        </div>

                    </div>
                    <div className='flex gap-7 mt-7 text-xl'>
                        <FaGoogle />
                        <FaTwitter />
                        <FaInstagram />
                        <FaFacebook />

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Contact;