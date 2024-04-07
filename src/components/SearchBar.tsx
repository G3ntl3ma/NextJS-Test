import React from 'react'
import { FaSearch } from "react-icons/fa";
type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: React.FormEventHandler<HTMLInputElement> | undefined;
}

export default function SearchBar(props: Props) {
  return (
    <form className=
    'flex relative items-center justify-center h-10'>
        <input 
        className="px-4 py-2 w-[230px] rounded-l border-black border-2 border-r-0 focus:outline-none focus:border-blue-500 h-full"
        type= 'text' placeholder='Search Location' 
        onChange={props.onChange} onSubmit={props.onSubmit} value={props.value}/>
        <button 
        className = "px-4 py-[9px] rounded-r border-black border-2 border-l-0 bg-blue-500 h-full focus:outline-none text-white hover:bg-blue-600"
        >
            <FaSearch/>
        </button>
    </form>
  )
}