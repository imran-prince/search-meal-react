import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='  bg-green-100  text-2xl p-5   mx-auto'> 
           <div className='flex justify-between  w-50  m-auto'>
           <CustomLink   to='/home'>Home</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
            <CustomLink to='/meal'>Meal</CustomLink>
            <CustomLink to='/country'>Country</CustomLink>
            <CustomLink to='/contact'>Contact</CustomLink>
             
           </div>
            
        </div>
    );
};

export default Header;