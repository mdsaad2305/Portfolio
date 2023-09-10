import React from 'react';
import { Link } from 'react-scroll';
import { FaBriefcase, FaCode, FaEnvelope } from 'react-icons/fa';
import '../index.css'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center">
      <div className="text-beige text-2xl font-semibold pl-8 text-fancy font-fancy ">M Saad</div>
      <div className="flex space-x-10 pr-24">
        <NavItem title="Projects" link="Projects" icon={<FaBriefcase />} />
        <NavItem title="Skills" link="Skills" icon={<FaCode />} />
        <NavItem title="Contact" link="Contact" icon={<FaEnvelope />} />
      </div>
    </nav>
  );
};

const NavItem = ({ title, link, icon }) => {
  return (
    <div className="relative group flex items-center">
      <Link to={link} spy={true} smooth={true} offset={50} duration={500} className="text-white hover:text-gray-300 transition duration-300 flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </Link>
      <div className="absolute w-full h-1 bg-blue-500 bottom-0 left-0"></div>
    </div>
  );
};

export default Navbar;
