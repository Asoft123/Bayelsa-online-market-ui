import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';
const Footer = () => {
      return ( 
            <div className='bg-dark'>
               <p className="text-center text-muted"> <FaRegCopyright /> Bayelsa Online Market Square, {new Date().getFullYear()}</p>
            </div>
       );
}
 
export default Footer;