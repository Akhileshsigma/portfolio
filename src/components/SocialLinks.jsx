import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
   
    const links = [
    {
        id:1,
        child:(
            <>
            Linkedin<FaLinkedin size={30} />
            </>
        ),
        href: 'https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFlqCRknmWUKQAAAYl5AYi462xGU0TQcCFtDvl4hpJuFxcGaJ5r4FuSt09FOLCBp-9VFFkgTRY7Ov-HLDNljHEbY3cu6lYnqnwfp3zigpSbEk6TbnIdkc4GwV2re3DCDuN0dhc=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fakhilesh-k-j-9b839b22a%2F',
        style: 'rounded-tr-md'
    },
    {
        id:2,
        child:(
            <>
            GitHub<FaGithub size={30} />
            </>
        ),
        href: 'https://github.com/Akhileshsigma',
    },
    {
        id:3,
        child:(
            <>
            Mail<HiOutlineMail size={30} />
            </>
        ),
        href: 'mailto:akhileshkj123@gmail.com',
        
    },
    {
        id:4,
        child:(
            <>
            Resume<BsFillPersonLinesFill size={30} />
            </>
        ),
        href: '/Akhilesh_resume.pdf',
        style: 'rounded-br-md',
        download: true,
    }, 
];

  return (
    <div className=' flex flex-col top-[35%] left-0 fixed'>
    <ul>
    {links.map(({id, child, href, style, download}) =>(
         <li  key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-amber-400'+" "+style}>
         <a href="" className='flex justify-between items-center w-full text-white' 
         download={download}
         target='_blank'>
         {child}
         </a>
     </li>

    ))}

       
    </ul>
    </div>
  );
};

export default SocialLinks;