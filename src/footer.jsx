import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-hild-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img 
              src="/images/logo.png" 
              alt="HILD Defence & Aerospace" 
              className="h-16 mb-4"
            />
            <p className="text-gray-400 text-sm">
              Leading innovation in defence, aerospace, and advanced technology solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-hild-orange">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-hild-orange transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-hild-orange transition-colors">About</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-hild-orange transition-colors">Products</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-hild-orange transition-colors">Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-hild-orange">Products</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">UAS/Drone Systems</li>
              <li className="text-gray-400 text-sm">Counter-UAS (C-UAS)</li>
              <li className="text-gray-400 text-sm">Medical Equipment</li>
              <li className="text-gray-400 text-sm">Defence Systems</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-hild-orange">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.linkedin.com/company/hild-defence-and-aerospace" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-hild-orange transition-colors">
                <FaLinkedin />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Eagle Towers, Greams Road<br />
              Chennai, Tamil Nadu 600006
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} HILD Defence & Aerospace. All rights reserved.</p>
          <p className="mt-2">ISO 13485:2016 Certified | Part of Eagle Group</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
