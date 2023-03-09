import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiAlignRight } from "react-icons/bi";

export default function Header() {
    return (
        <div className='flex justify-between items-center md:px-[60px] px-[20px] py-2 w-full absolute'>
            <div>
                <Image src='/Logo.webp' alt='Panaverse' width={120} height={120} />
            </div>
            <div>
                <ul className='hidden md:flex space-x-[60px] text-lg font-semibold'>
                    <li className=' hover:text-blue-600 pt-[8px]'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className=' hover:text-blue-600 pt-[8px]'>
                        <Link href='/'>Explore</Link>
                    </li>
                    <li className=' hover:text-blue-600 pt-[8px]'>
                        <Link href='/'>About</Link>
                    </li>
                    <li className=' hover:text-blue-600 pt-[8px]'>
                        <Link href='/'>Contact</Link>
                    </li>
                    <div>
                        <button className=' bg-blue-600 px-6 py-2 text-white rounded-xl
                         text-xl font-semibold hover:bg-blue-900 hover:animate-bounce'>Apply</button>
                    </div>
                </ul>
            </div>
            <div className='static md:hidden text-3xl'><BiAlignRight /></div>
        </div>
    )
}
