import React from 'react';
import { FaRegEnvelope } from "react-icons/fa";
import Link from 'next/link';
const HelpCenter = () => {
    return (
        <div className="bg-[#23262F] lg:md:py-[80px]  lg:md:mt-[15rem] mt-20">
            <div className="max-w-[1500px] lg:md:px-8 px-4 mx-auto my-auto lg:md:py-0 py-8">
                <div className="grid lg:md:grid-cols-2 items-center justify-between">
                    <div className="lg:md:mb-0 mb-6">
                        <p className="text-[#777e90] uppercase mb-4 text-[16px]">WE’RE HERE TO HELP YOU</p>
                        <h2 className="lg:md:text-5xl text-3xl font-bold text-[#eee]">Let&apos;s discuss your <br />project.</h2>

                        <h3 className="flex items-center gap-x-4 text-[#B1B5C3] text-[16px] lg:md:mt-10 mt-4 hover:text-[#27D294] cursor-pointer">
                            <span><FaRegEnvelope /></span>
                            <span>support@codesquad.com</span>
                        </h3>
                    </div>

                    {/* form */}
                    <div>
                        <form>
                            <div className="flex lg:md:flex-row flex-col items-center justify-between mb-6">
                                <input type="text" placeholder="First Name" className="input w-full max-w-xs rounded-full bg-[#000000] focus:outline-[2px] py-6 lg:md:mb-0 mb-6" />
                                <input type="text" placeholder="Last Name" className="input w-full max-w-xs rounded-full bg-[#000000] focus:outline-[2px] py-6" />
                            </div>
                            <div className="flex lg:md:flex-row flex-col items-center justify-between mb-6">
                                <input type="text" placeholder="Email" className="input w-full max-w-xs rounded-full bg-[#000000] focus:outline-[2px] py-6 lg:md:mb-0 mb-6" />
                                <input type="text" placeholder="Phone" className="input w-full max-w-xs rounded-full bg-[#000000] focus:outline-[2px] py-6 " />
                            </div>
                            <div className="flex lg:md:flex-row flex-col items-center justify-between mb-6">
                                <input type="text" placeholder="Website" className="input w-full max-w-xs rounded-full bg-[#000000] focus:outline-[2px] py-6 lg:md:mb-0 mb-6" />
                                <input type="text" placeholder="Company" className="input w-full max-w-xs rounded-full bg-[#000000] focus:outline-[2px] py-6 " />
                            </div>
                            <textarea className="min-h-[150px] textarea rounded-xl bg-[#000000] focus:outline-[2px] w-full" placeholder="Tell us about your project"></textarea>

                            <div className="flex lg:md:flex-row flex-col items-center gap-x-4 mt-6">
                                <button className="py-2 px-6 text-[#333] bg-[#27D294] rounded-full">Submit</button>
                                <div className="text-[#B1B5C3] text-[16px] flex lg:md:flex-row flex-col justify-center lg:md:items-center items-start lg:md:gap-x-2 lg:md:mt-0 mt-2 lg:md:text-start text-center">
                                    <span>By clicking submit, I agree to Coder Squad’s  <Link href="/" className="hover:text-[#27D294]">Privacy Policy.</Link></span>
                                    
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpCenter;