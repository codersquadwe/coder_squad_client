import React from 'react';
import Image from 'next/image'
import { FaCheck } from "react-icons/fa6";


const Mern = () => {
    return (
        <div className="max-w-[1500px] mx-auto my-auto lg:md:mt-[15rem] mt-20 lg:md:px-6 px-4">
            <div className="grid lg:md:grid-cols-2 w-full items-center justify-center">
                <div>
                    <Image
                        src="https://i.ibb.co/tzC68Lt/mern.png"
                        alt="migrate"
                        width={1400}
                        height={1300}
                    />
                </div>
                <div>
                    <h2 className="lg:md:text-5xl text-2xl font-bold text-[#eee]">Upscale your eCommerce with Mern Stack Technology</h2>
                    <p className="my-10 lg:md:text-[18px] text-[16px]  text-[#B1B5C3]">Moving your store to a different eCommerce platform? Let us help you with data migration, customizations, API integrations, and much more.</p>
                    <ul className="grid gap-y-4">
                        <li className="flex items-center gap-x-4">
                            <FaCheck className="text-[#27D294] text-xl" />
                            <span className=" text-[#B1B5C3] lg:md:text-[18px] text-[16px] ">Turn-key migration from Magento, Shopify, +5 other platforms</span>
                        </li>
                        <li className="flex items-center gap-x-4">
                            <FaCheck className="text-[#27D294] text-xl" />
                            <span className=" text-[#B1B5C3] lg:md:text-[18px] text-[16px] ">Storefront Customizations</span>
                        </li>
                        <li className="flex items-center gap-x-4">
                            <FaCheck className="text-[#27D294] text-xl" />
                            <span className=" text-[#B1B5C3] lg:md:text-[18px] text-[16px] ">API & Enterprise Integrations</span>
                        </li>
                    </ul>
                </div>

                
            </div>
        </div>
    );
};

export default Mern;