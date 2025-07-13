// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white dark:bg-black py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 */}
        <div>
          <h4 className="text-lg font-semibold text-blue-400 mb-4">Contact</h4>
          <p className="mb-2">📞 WhatsApp: <a href="https://wa.me/91XXXXXXXXXX" className="text-blue-300">91XXXXXXXXXX</a></p>
          <p>📧 Email: <a href="mailto:your@email.com" className="text-blue-300">your@email.com</a></p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-lg font-semibold text-blue-400 mb-4">Social</h4>
          <div className="flex gap-5 text-2xl">
            <a href="https://facebook.com" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="https://instagram.com" className="hover:text-pink-400"><FaInstagram /></a>
            <a href="https://youtube.com" className="hover:text-red-500"><FaYoutube /></a>
            <a href="https://wa.me/91XXXXXXXXXX" className="hover:text-green-400"><FaWhatsapp /></a>
            <a href="mailto:your@email.com" className="hover:text-blue-300"><FaEnvelope /></a>
          </div>
        </div>

        {/* Column 3 */}
        <div className="text-center md:text-right">
          <p className="text-sm mb-2">&copy; {new Date().getFullYear()} All Rights Reserved</p>
          <p className="text-sm">
            Designed & Developed with <span className="text-red-500">❤️</span> by <span className="font-bold text-blue-300">Manoj Vishwakarma</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
