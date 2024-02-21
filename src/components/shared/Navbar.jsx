import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import logo from '../../../public/assets/logo.png';
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
   
    return (
        <div className="max-w-[1320px] w-full mx-auto lg:md:px-8 px-6">
            <div className="flex items-center justify-between bg-transparent py-4">
                <div className="navbar-start">
                    <Link href="/">
                        <Image src={logo} alt="logo" width={250} height={10} />
                    </Link>                                       
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-normal text-[18px]">
                        <li><a href="#services">Services</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>                     
                </div>
                <div className="navbar-end lg:md:hidden block text-end">
                    <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content mr-2">
                        <label htmlFor="my-drawer" className="btn btn-ghost btn-circle text-2xl hover:text-orange transition-colors duration-300">
                            <HiMenuAlt2 />
                        </label>
                    </div>
                    <div className="drawer-side z-[100]">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay">

                        </label>
                        <label htmlFor="my-drawer" aria-label="close sidebar" className='p-4 ps-6 z-[100] text-[#fff] text-2xl'>
                            <RxCross1 className="text-white text-2xl hover:text-orange transition-colors duration-300" />
                        </label>

                        <ul className="pt-24 menu p-4 w-80 min-h-full bg-[#051d42] text-[#fff] gap-y-7">
                             <li><a href="#services">Services</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;