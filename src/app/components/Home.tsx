import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <>

      <div className=" bg-[url('/bg.jpg')] bg-cover bg-fixed text-center md:px-44 px-3 md:py-40 py-28 rounded-b-[30%]">
        <h1 className=' text-black md:text-6xl text-3xl font-extrabold'>Prepare yourself for the Next Generation of Internet with Panaverse</h1>
        <p className=' md:text-xl text-md mt-4 md:px-[80px]'>One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</p>
        <button className=' bg-blue-700 px-5 py-3 rounded-lg text-white font-semibold mt-4'>More Info</button>
      </div>


      <div className='flex shadow-2xl w-[70%] justify-around md:py-[80px] py-[40px] space-y-12 items-center m-auto -mt-[80px] bg-white rounded-3xl md:flex-row flex-col'>
        <Image src={'/Logo.webp'} alt='' width={150} height={150} />
        <Image src={'/logo.svg'} alt='' width={150} height={150} />
        <Image src={'/saylani.png'} alt='' width={150} height={150} />
      </div>


      <div className='w-[80%] flex m-auto mt-10 md:flex-row flex-col'>
        <div className=' md:w-1/2'>
          <Image src='/logo2.webp' alt='' width={400} height={400} />
        </div>
        <div className=' md:w-1/2 pt-10'>
          <h1 className=' text-black md:text-5xl text-3xl font-bold border-l-[6px] border-l-blue-700 pl-3'>Program Of Studies</h1>
          <p className=' md:text-md text-base mt-4 text-justify'>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</p>
          <button className=' bg-blue-700 px-5 md:py-3 py-2 rounded-lg text-white font-semibold mt-4'>Read More</button>
        </div>
      </div>

      <div className='flex md:flex-row flex-col my-10'>
        <div className="bg-[url('/bootcamp3.jpg')] bg-cover bg-center h-[11cm] md:w-1/2"></div>
        <div className="md:w-1/2 bg-[url('/bg123.avif')] -my-6 md:p-20 p-7">
          <h1 className=' text-black md:text-5xl text-4xl font-bold border-l-[6px] border-l-blue-700 pl-3'>Bootcamp 2023</h1>
          <p className=' md:text-md text-base mt-4 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt officiis, labore perferendis eius eos recusandae voluptatum suscipit at, architecto impedit tempora excepturi nostrum odio, blanditiis numquam veniam fugiat voluptatem delectus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt officiis, labore perferendis eius eos recusandae voluptatum suscipit at, architecto impedit tempora excepturi nostrum odio, blanditiis numquam veniam fugiat voluptatem delectus!</p>
          <button className=' bg-blue-700 px-5 py-3 rounded-lg text-white font-semibold mt-4'>Read More</button>
        </div>
      </div>

    </>
  )
}
