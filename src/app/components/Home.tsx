import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <>

      <div className=" bg-[url('/bg.jpg')] bg-cover bg-fixed text-center px-44 py-40 rounded-b-[30%]">
        <h1 className=' text-black text-6xl font-extrabold'>Prepare yourself for the Next Generation of Internet with Panaverse</h1>
        <p className=' text-xl mt-4 px-[80px]'>One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</p>
        <button className=' bg-blue-700 px-5 py-3 rounded-lg text-white font-semibold mt-4'>More Info</button>
      </div>


      <div className='flex shadow-2xl w-[70%] justify-around py-[80px] m-auto -mt-[80px] bg-white rounded-3xl'>
        <Image src={'/Logo.webp'} alt='' width={150} height={150} />
        <Image src={'/logo.svg'} alt='' width={150} height={150} />
        <Image src={'/saylani.png'} alt='' width={150} height={150} />
      </div>


      <div className='w-[80%] flex m-auto mt-10'>
        <div className=' w-1/2'>
          <Image src='/logo2.webp' alt='' width={400} height={400} />
        </div>
        <div className=' w-1/2 pt-10'>
          <h1 className=' text-black text-5xl font-bold border-l-[6px] border-l-blue-700 pl-3'>Program Of Studies</h1>
          <p className=' text-md mt-4'>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</p>
          <button className=' bg-blue-700 px-5 py-3 rounded-lg text-white font-semibold mt-4'>Read More</button>
        </div>
      </div>

    </>
  )
}
