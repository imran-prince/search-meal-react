import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
    return (
      <div>
            <div className='text-center'>
            <h1 className='my-5'>I am Contact Page</h1>
            <Link to='bd-address' className='bg-cyan-300 mx-3 px-3 rounded-xl'>Bd Office</Link>
            <Link to='us-address' className='bg-fuchsia-400 px-3 rounded-xl'>Us Office</Link>
           
          
        </div>
        <div  className='my-20 px-20 text-white' >
        <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Contact;