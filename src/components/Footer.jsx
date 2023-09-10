import React from 'react';
import { FaGithub, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="flex flex-col items-center">
        <div className="flex space-x-8">
          <a href="https://github.com/mdsaad2305" target="_blank" rel="noopener noreferrer">
            <div className="rounded-full p-3 bg-gray-700 hover:bg-gray-600 transition duration-300 transform hover:scale-110">
              <FaGithub size={30} className="text-white" />
            </div>
          </a>
          <a href="https://ca.linkedin.com/in/mohammed-saad-417322156" target="_blank" rel="noopener noreferrer">
            <div className="rounded-full p-3 bg-gray-700 hover:bg-gray-600 transition duration-300 transform hover:scale-110">
              <FaLinkedin size={30} className="text-white" />
            </div>
          </a>
        </div>
        <p className="text-white mt-4 text-lg font-semibold italic">M Saad</p>
      </div>
    </footer>
  );
};

export default Footer;
