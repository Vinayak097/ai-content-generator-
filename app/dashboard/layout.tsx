import React from 'react'
import SideNav from '../_compenents/SideNav';
import Navbar from '../_compenents/Navbar';
import Header from '../_compenents/Header';
import SearchSection from '../_compenents/SearchSection';

function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
        <div className='md:w-64 hidden md:block fixed  border'>
        <SideNav></SideNav>

        </div>
        
        <div className='md:ml-64 '> 
            <Header></Header>
            
            {children}
        </div>

        
    </div>
  )
}

export default layout