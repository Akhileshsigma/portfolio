import React from 'react'
import akhi from "../assets/akhi.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="Home" className="h-screen w-full bg-gradient-to-b from-emerald-500 via-lightwhite to-gray-600">
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4  md:flex-row'>
            <div className="flex flex-col justify-center h-full">
                <h2 className='text-4xl sm:text-7xl font-bold  text-white'> I'am a Full Stack Developer</h2>
                <p className='text-neutral-100	 italic py-4 max-w-md'>
                I'am a Full stack Developer Fresher.
                Currently, I love to work on web application using
                React.Js, HTML, tailwind CSS, Javascript.
            </p>
            
            <div>
                <Link to='portfolio' smooth duration={500}   className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'> 
                    portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                    <MdKeyboardArrowRight size={25} className='ml-1'/>
                    </span>
                </Link>
            </div>
        </div>
        <div>
            <img src={akhi} alt="My Profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Home 