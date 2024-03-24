import Image from 'next/image';
import React from 'react';

const ShopifyDetails = () => {
    return (
        <div>
            <div className="w-full mx-auto lg:md:ps-[10.5rem] lg:md:pb-[7rem] ">
                <div className="flex items-center relative mx-auto lg:md:px-0 px-4">

                    <div className="w-full lg:md:h-[90vh] h-[80vh] flex items-center justify-center">
                        {/* headers */}
                        <div className="relative z-10 grid lg:md:grid-cols-2 items-center w-full mx-auto justify-center">
                            <div className="text-start lg:md:ps-6">
                                <h2 className="lg:md:text-7xl text-3xl font-bold w-full text-[#EEEEEE] mb-8">Full-stack, full-service Shopify Agency</h2>
                                <p className="max-w-[700px] lg:md:text-xl text-lg text-[#B1B5C3]">We assist you in conceptualizing, building, and expanding your business on Shopify, the premier eCommerce platform, from planning to seamless store deployment.</p>

                                <div>
                                    
                                </div>
                            </div>
                            <div className="lg:md:block hidden " >
                                <Image
                                    src="https://i.ibb.co/6ZpcWKp/image.png"
                                    alt="migrate"
                                    width={1800}
                                    height={1300}
                                />
                            </div>
                        </div>
                    </div>

                </div>

            </div>            
        </div>
    );
};

export default ShopifyDetails;