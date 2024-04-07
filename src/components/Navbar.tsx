import React from 'react'
import { FaSun } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import SearchBar from './SearchBar';
type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className= "shadow sticky top-0 left-0 z-50 bg-white">
        <div className= "h-[80px] w-full flex justify-between items-center max-w-7x1 px-3 mx-auto">
            <p className="flex items-center justify-center gap-2">
                <h2 className='text-gray-500 text-3xl'>
                    Weather
                </h2>
                <FaSun className='text-3xl mt-1 text-yellow-300' />
            </p>
            <></>
            <section className= "flex gap-2 items-center">
                <FaLocationCrosshairs className='text-3xl mt-1 text-gray-300 hover:opacity-80 cursor-pointer'/>
                <MdLocationOn className='text-3xl mt-1 text-gray-700 hover:opacity-80'/>
                <p className='text-slate-900/80 text-sm'>Germany</p>
                <SearchBar/>
            </section>

        </div>
    </nav>
  )
}