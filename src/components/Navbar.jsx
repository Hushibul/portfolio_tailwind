import React, { useState } from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaBars, FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';
import logo from '../assets/hushibul_logo.jpg';
import CV from '../assets/pdf/CV.pdf';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <nav className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <Link to='home' smooth={true} duration={500}>
          <img
            className='cursor-pointer'
            src={logo}
            alt='logo'
            style={{ width: '50px' }}
          />
        </Link>
      </div>
      {/* menu  */}
      <ul className='hidden md:flex nav-links'>
        <li className='li-effect'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='li-effect'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='li-effect'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='li-effect'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='li-effect'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger  */}
      <div onClick={handleClick} className='md:hidden ml-60 z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile-menu  */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6'>Home</li>
        <li className='py-6'>About</li>
        <li className='py-6'>Skills</li>
        <li className='py-6'>Projects</li>
        <li className='py-6'>Contact</li>
      </ul>

      {/* social-icons  */}
      <div className='flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/hushibul-haque/'
            >
              LinkedIn <FaLinkedin className='pr-2' size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/Hushibul'
            >
              Github <FaGithub className='pr-2' size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new'
            >
              Email <HiOutlineMail className='pr-2' size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={CV}
              download
            >
              Resume <BsFillPersonLinesFill className='pr-2' size={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
