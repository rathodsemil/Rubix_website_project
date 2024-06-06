import React from 'react'
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"



const HomePage = () => {
  return (
    <>
      <div className='relative h-[550px]'>
        <div className='h-650px'>
          <div className='line'></div>
          <div className='main112'>
            <img src={img1} alt="" />
            <div className='textmain textmain1'>
              <div className='flex mb-2'>
                <p className='font-bold'>Quick parcel delivery,</p>
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
      <div className='flex justify-center pt-6 '>
        <div> <p className='text-3xl font-semibold'>Best Seller Products</p></div>
      </div>
      <div className='flex justify-center '>
        <div> <p>Top Sale in This week</p></div>
      </div>
     
    </>
  )
}

export default HomePage
