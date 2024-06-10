import React from 'react'
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"



const HomePage = () => {
  return (
    <>
      <div className=' relative h-[550px]'>
        <div className='h-650px'>
          <div className='line'></div>
          <div className='main112'>
            <img src={img1} alt="" />
            <div className='textmain textmain1'>
              <div className='flex mb-2'>
                <p className='font-bold'>Quick parcel delivery, ///ram</p>
                <p className='text-yellow-600 font-bold'>from $25</p>
              </div>
              <h1 className='text-[45px] font-bold'>Normann Copenhagen -<br></br>Craft salt and pepper gririder</h1>
              <button className='text-white bg-black h-[50px] w-[150px] flex items-center rounded-md justify-center mt-3'>Start shopping</button>
            </div>
          </div>
          <div className='main113'>
            <img className='w-screen' src={img2} alt="" />
            <div className='textmain textmain2'>
              <div className='flex mb-2'>
                <p className='font-bold'>Quick parcel delivery,</p>
                <p className='text-yellow-600 font-bold'>from $25</p>
              </div>
              <h1 className='text-[45px] font-bold'>Wood Minimal Office Chair<br></br>Extra 40% off now.</h1>
              <button className='text-white bg-black h-[50px] w-[150px] flex items-center rounded-md justify-center mt-3'>Start shopping</button>
            </div>
          </div>
          <div className='main114 '>
            <img className='w-screen' src={img3} alt="" />
            <div className='textmain textmain3'>
              <div className='flex mb-2'>
                <p className='font-bold'>Quick parcel delivery,</p>
                <p className='text-yellow-600 font-bold'>from $25</p>
              </div>
              <h1 className='text-[45px] font-bold'>Everyone's Talking About<br></br>Sweeper and funnel.</h1>
              <button className='text-white bg-black h-[50px] w-[150px] flex items-center rounded-md justify-center mt-3'>Start shopping</button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center pt-[100px] '>
        <div> <p className='text-3xl font-semibold'>Best Seller Products</p></div>
      </div>
      <div className='flex justify-center '>
        <div> <p>Top Sale in This week</p></div>
      </div>
      <div>
        <iframe className='w-full h-[400px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238133.18800900166!2d72.65748353239132!3d21.159120355102836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1717680775091!5m2!1sen!2sin"
           allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  )
}

export default HomePage
