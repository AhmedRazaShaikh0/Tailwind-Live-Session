import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <>
            <div className=' md:flex align-middle gap-[30px] p-[60px] bg-black'>
                <div className=' md:w-1/4 mb-[20px] md:mb-[0px]'>
                    <h1 className=' text-white text-2xl font-bold mb-[30px] border-l-blue-600 border-l-[6px] pl-[10px]'>About Us</h1>
                    <Image src='/Logo.webp' alt='' width={120} height={120} />
                    <p className=' text-gray-600 mt-[20px]'>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread</p>
                </div>
                <div className=' md:w-1/4 mb-[20px] md:mb-[0px]'>
                    <h1 className=' text-white text-2xl font-bold border-l-blue-600 border-l-[6px] pl-[10px]'>Useful Links</h1>
                    <ul className=' text-gray-600 pt-[30px]'>
                        <li><Link href={'/'} className='  hover:text-white'>Home</Link></li>
                        <li><Link href={'/'} className='  hover:text-white'>Explore</Link></li>
                        <li><Link href={'/'} className='  hover:text-white'>About</Link></li>
                        <li><Link href={'/'} className='  hover:text-white'>Contact</Link></li>
                    </ul>
                </div>
                <div className=' md:w-1/4 mb-[20px] md:mb-[0px]'>
                    <h1 className=' text-white text-2xl font-bold border-l-blue-600 border-l-[6px] pl-[10px]'>Follow Us</h1>
                    <ul className=' text-gray-600 pt-[30px]'>
                        <li><Link href={'/'} className='  hover:text-white'>Facebook</Link></li>
                        <li><Link href={'/'} className='  hover:text-white'>Linkedin</Link></li>
                        <li><Link href={'/'} className='  hover:text-white'>Twitter</Link></li>
                        <li><Link href={'/'} className='  hover:text-white'>Youtube</Link></li>
                        <li><Link href={'/'} className='  hover:text-white'>GitHub</Link></li>
                    </ul>
                </div>
                <div className=' md:w-1/4 mb-[20px] md:mb-[0px]'>
                    <h1 className=' text-white text-2xl font-bold border-l-blue-600 border-l-[6px] pl-[10px]'>Contact Us</h1>
                    <ul className=' text-gray-600 pt-[30px]'>
                        <li><Link href={'/'} className='  hover:text-white'>+92 123 4567890</Link></li>
                        <li><Link href={'/'} className='  hover:text-white'>abcdefghi@gmail.com</Link></li>
                        <li><Link href={'/'} className='  hover:text-white'>Karachi, Pakistan</Link></li>
                    </ul>
                </div>
            </div>
            <div className='md:flex justify-between px-[60px] py-[10px] text-center'>
                <p className=' font-bold'>All Rights Reserved © | <br className='md:hidden' /><Link href='https://github.com/AhmedRazaShaikh0' target='_blank' > Ahmed Raza Shaikh </Link></p>
                <div>
                    <Link href={'/'}>Legals </Link>|
                    <Link href={'/'}> Terms Of Use </Link>|
                    <Link href={'/'}> Privacy Policy</Link>
                </div>
            </div>
        </>
    )
}
