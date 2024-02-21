import React from 'react';
import logo from '../../../public/assets/logo.png';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="lg:md:mt-20 mt-16">
      <footer className="footer footer-center p-4 bg-[#f5f5f5] text-[#051d42]">
        <aside>
          <p className="lg:md:text-[16px] font-semibold text-[12px]">Copyright © 2024 - All right reserved by Coder Squad</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;