import React from 'react'
import { FaSearch } from "react-icons/fa";
type Props = {}

export default function searchbox({}: Props) {
  return (
    <form className='flex relative items-center justify-center h-10'>
        <input type= 'text'/>
        <button>
            <FaSearch/>
        </button>
    </form>
  )
}