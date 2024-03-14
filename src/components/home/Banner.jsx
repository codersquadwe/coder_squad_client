import React from 'react';
import Image from 'next/image'

const Banner = () => {
    return (
        <div className="w-full mx-auto lg:md:px-0 ps-6">
            <div className="flex items-center relative">
               
                <div className="banner w-full h-[90vh] flex items-center justify-center">
                     {/* headers */}
                   <div className="relative z-10 flex items-center max-w-[1380px] w-full mx-auto justify-center">
                    <div className="text-start">
                     <h2 className="lg:md:text-7xl text-4xl font-bold text-[#EEEEEE] mb-8">We build innovative, creative business solutions</h2>
                    <p className="max-w-[700px] lg:md:text-xl text-lg text-[#B1B5C3]">We are a comprehensive eCommerce firm. Since 2020, we&aposve assisted numerous brands in launching prosperous platforms on Shopify, BigCommerece, Magento. Let us assist you as well!</p>
                   </div>
                   <div className="lg:md:block hidden" >
                    <Image 
                    width={1300}
                    height={500}
                    alt="mockup"
                    className="max-w-[140%]"
                    src="https://i.ibb.co/74NSHWP/image.png"
                    />
                   </div>
                   </div>
                </div>

            </div>
            
        </div>
    );
};

export default Banner;