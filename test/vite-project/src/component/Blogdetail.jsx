import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import data from './Data';
function Blogdetail() {
    const {id} = useParams();
    // console.log('data : ', data)
    // console.log('blog Id :',id)
    // const blogdata = data.filter((item)=> item.id == id);
    // console.log('blog  data : ', blogdata);
    const location = useLocation();
    const data = location.state.data
    console.log('data :', data)
    
  return (
    <div className=' justify-around'>
                                         {/* <img   src={blogdata[0].img}
                                            alt="" className='rounded-xl mb-4 h-32' />
                                        <h3 className='font-semibold'>{blogdata[0].name}</h3>
                                        <p className='text-gray-500'>{blogdata[0].role}</p>
                                         <p className='text-gray-500'>{blogdata[0].description}</p>  */}

                                         <>
                                         Blogdetail id
                                         </>
                                    </div>
  )
}

export default Blogdetail