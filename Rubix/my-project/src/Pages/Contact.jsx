import React from 'react'
import { ImPhone } from "react-icons/im";
import { PiMapPinFill } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import img4 from "../assets/img3.jpg";

const Contect = () => {
  return ( 
    <div>
      <div className='w-full h-[700px]'>

        <iframe className='w-full h-[600px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238133.18800900166!2d72.65748353239132!3d21.159120355102836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1717680775091!5m2!1sen!2sin"
          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>

      <div className='pl-20 pb-48 w-full grid grid-cols-3 '>

        <div className=' ml-2 w-[80vh]'>
          <h1 className='text-3xl font-bold mb-8'>Contact Us</h1>
          <div className='mt-8'>
            <span className=' text-lg leading-9' h>
              <p>there's no plance home. To help you perfect, our stores are open we'r dellivering normal, our online store is available 27/7, and our customer service team is ready to help you vaia phone and live chat</p>
            </span>
          </div>

          <div className='mt-16'>
            <ul>
              <li className='flex'>
                <PiMapPinFill className=' mt-1 p-1 w-12 h-12 border-solid border-2 border-gray-500 ' />
                <span className='ml-5'>
                  <h1 className='  font-bold text-2xl'>Adress</h1>
                  <h5 className='mt-1 text-lg'> 807 Mize Cemetery RD,Somerset</h5>
                </span>
              </li>
              <li className='flex mt-8'>
                <ImPhone className='mt-1 p-1 w-12 h-12 border-solid border-2 border-gray-500 ' />
                <span className='ml-6'>
                  <h1 className='  font-bold text-2xl'>Phone</h1>
                  <h5 className='mt-1'>+41 71 227 76 868</h5>
                </span>
              </li>
              <li className='flex mt-8'>
                <MdOutlineEmail className='mt-1 p-1 w-14 h-14 border-solid border-2 border-gray-500 ' />
                <span className='ml-6'>
                  <h1 className='  font-bold text-2xl'>Email</h1>
                  <h5 className='mt-1'> Contact@rubix.cpm</h5>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <img className='w-96 h-96' src={img4} alt="" />



      </div>

    </div>



  )
}

export default Contect
