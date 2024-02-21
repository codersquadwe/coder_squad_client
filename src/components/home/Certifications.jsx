import React from 'react';
import Image from 'next/image';
const Certifications = () => {
    return (
        <div data-aos="fade-up"
            data-aos-duration="2000"
            className="max-w-[1320px] lg:md:px-8 px-4 mx-auto my-auto lg:md:mt-16 mt-12">
            <div className="grid grid-cols-2 items-center justify-center w-full gap-x-6">
                <div className="">
                <Image src="https://promomedia.agency/wp-content/uploads/2021/04/shopify-partner-white-MIN.png" alt="certifications" width={500} height={500}/>
                </div>
                <div>
                    <Image src="/assets/bigcom.png" alt="certifications" width={500} height={500}/>
                </div>
            </div>            
        </div>
    );
};

export default Certifications;