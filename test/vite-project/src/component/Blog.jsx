import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import data from './Data';

function Blog() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className='bg-gray-100 py-16'>
      <div className='max-w-6xl mx-auto px-6'>
        <h1 className='text-4xl font-bold mb-4'>Our Team</h1>

        <p className='text-gray-600 mb-10'>
          We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results.
        </p>

        <div className='grid md:grid-cols-3 gap-6'>
          {data.map((value, index) => (
            <div className='cursor-pointer' key={index}>
              <img
                onClick={() =>
                  navigate('/blogdetail', {
                    state: { data: value },
                  })
                }
                src={value.img}
                alt={value.name}
                className='rounded-xl mb-4'
              />

              <h3 className='font-semibold'>{value.name}</h3>
              <p className='text-gray-500'>{value.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;