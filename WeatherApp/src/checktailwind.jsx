import React from 'react'
import { Link } from 'react-router-dom'

const Checktailwind = () => {
    return (
        <div className="bg-slate-700 flex justify-between text-center items-center w-auto h-15 px-10">
            <div className=' p-4 text-white font-bold '>logo</div>
            <div className='p-4 '>
                <input type="text" name="item" id="item" className=' p-2 bg-white border text-white border-gray-500 rounded-lg' />
                <button className=' bg-gray-500  text-white mx-1 rounded-sm p-2'>Search</button>
            </div>
            <nav className='flex gap-3 '>
                <Link to='/about'>About</Link>
                <Link to='/feature'>Features</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/error'>Error</Link>
            </nav>

        </div>
    )
}
export default Checktailwind