import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";


const RecentWorks = () => {
    return (
        <div className="lg:md:ps-[10.5rem] mx-auto my-auto lg:md:mt-[15rem] mt-20">
            <div>
                <h2 className="lg:md:text-5xl font-bold text-[#eee]">Recent Work</h2>
                <p className="mb-16 mt-4 lg:md:text-[18px] text-[16px]  text-[#B1B5C3]">We are trusted by top eCommerce brands across the globe and are constantly transforming eCommerce experiences for millions.</p>

                <div className="grid lg:md:grid-cols-3 gap-x-4">
                    <div className="relative rounded-lg">
                        <Image
                            src="https://i.ibb.co/9cMC7kV/image.png"
                            width={600}
                            height={700}
                            alt="face"
                            className="rounded-lg transition-all duration-300 group-hover:filter group-hover:blur-[20px]"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 flex flex-col justify-center text-white rounded-lg ps-8 cursor-pointer">
                            <h3 className="text-5xl mb-6 font-semibold">Good Face Stuff</h3>
                            <p className="text-2xl font-medium text-[#ddd]">BigCommerece Custom Design</p>
                            <Link href="/" className="mt-12 flex items-center text-[#27D294] text-2xl">
                               <FaArrowRightLong />
                            </Link>
                        </div>
                    </div>

                    <div className="relative rounded-lg">
                        <Image
                            src="https://i.ibb.co/9cMC7kV/image.png"
                            width={600}
                            height={700}
                            alt="face"
                            className="rounded-lg transition-all duration-300 group-hover:filter group-hover:blur-[20px]"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 flex flex-col justify-center text-white rounded-lg ps-8 cursor-pointer">
                            <h3 className="text-5xl mb-6 font-semibold">Good Face Stuff</h3>
                            <p className="text-2xl font-medium text-[#ddd]">BigCommerece Custom Design</p>
                            <Link href="/" className="mt-12 flex items-center text-[#27D294] text-2xl">
                               <FaArrowRightLong />
                            </Link>
                        </div>
                    </div>

                    <div className="relative rounded-lg">
                        <Image
                            src="https://i.ibb.co/9cMC7kV/image.png"
                            width={600}
                            height={700}
                            alt="face"
                               className="rounded-lg transition-all duration-300 group-hover:filter group-hover:blur-[20px]"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 flex flex-col justify-center text-white rounded-lg ps-8 cursor-pointer">
                            <h3 className="text-5xl mb-6 font-semibold">Good Face Stuff</h3>
                            <p className="text-2xl font-medium text-[#ddd]">BigCommerece Custom Design</p>
                            <Link href="/" className="mt-12 flex items-center text-[#27D294] text-2xl">
                               <FaArrowRightLong />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentWorks;