import React from 'react'

import textBg from "/assets/home-page/Hero/hero-bg-print.png";
import blob from "/assets/home-page/Hero/blob.png";

const Hero = () => {
  return (
    <section className='flex items-center justify-center md:items-start md:justify-start relative overflow-hidden bg-[#CCCFDA] min-h-[50vh] h-screen ' >

      {/* ?  hero bg image */}
      <img src="/assets/home-page/Hero/hero-desktop.png" alt="Hero bg img"
        className='absolute inset-0 w-full h-full object-cover object-[75%_center] z-10 '
      />

      <section className='w-full h-screen  absolute inset-0 bg-black/10 z-20' ></section>

      <img src={blob} alt="blob"
        className='opacity-70 w-[40%]  absolute z-30 '
        style={{
          top: "48%",
          left: "22%",
          translate: "-50% -50%"
        }}
      />

      <section className='relative z-40 top-60 left-26 flex flex-col gap-5 items-start' >

        <p className='text-xl font-bold tracking-wider' >Trade-in-offer</p>
        <h1 className='text-5xl font-extrabold flex flex-col gap-4 '>
          <span> Super value deals </span>
          <span className='text-[#0A8279]' >On all products</span>
        </h1>
        <p className='text-2xl' >Save more with coupons & up to 70% off!</p>
        <section className=' w-full py-4 relative text-2xl '>
          <img src={textBg} alt="" className='w-[60%]' />
          <button className=' absolute  top-6 left-20 font-semibold text-[#0A8279]' >Shop Now</button>
        </section>
      </section>

    </section>
  )
}

export default Hero