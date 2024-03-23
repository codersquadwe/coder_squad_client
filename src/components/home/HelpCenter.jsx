import React from 'react';
import { FaRegEnvelope } from "react-icons/fa";
import Link from 'next/link';
const HelpCenter = () => {
    return (
        <div className="bg-[#23262F] lg:md:py-[80px]  lg:md:mt-[15rem] mt-20">
            <div className="max-w-[1500px] lg:md:px-8 px-4 mx-auto my-auto">
                <div className="grid lg:md:grid-cols-2 items-center justify-between">
                    <div className="">
                        <p className="text-[#777e90] uppercase mb-4 text-[16px]">WE’RE HERE TO HELP YOU</p>
                        <h2 className="lg:md:text-5xl font-bold text-[#eee]">Let&apos;s discuss your <br />project.</h2>

                        <h3 className="flex items-center gap-x-4 text-[#B1B5C3] text-[16px] mt-10 hover:text-[#27D294] cursor-pointer">
                            <span><FaRegEnvelope /></span>
                            <span>support@codesquad.com</span>
                        </h3>
                    </div>

                    {/* form */}
                    <div>
                        <form>
                            <div className="flex items-center justify-between mb-6">
                                <input type="text" placeholder="First Name" className="input w-full max-w-xs rounded-full bg-[#000000] focus:outline-[2px] py-6" />
                                <input type="text" placeholder="Last Name" className="input w-full max-w-xs rounded-full bg-[#000000] focus:outline-[2px] py-6" />
                            </div>
                            <div className="flex items-center justify-between mb-6">
                                <input type="text" placeholder="Email" className="input w-full max-w-xs rounded-full bg-[#000000] focus:outline-[2px] py-6" />
                                <input type="text" placeholder="Phone" className="input w-full max-w-xs rounded-full bg-[#000000] focus:outline-[2px] py-6" />
                            </div>
                            <div className="flex items-center justify-between mb-6">
                                <input type="text" placeholder="Website" className="input w-full max-w-xs rounded-full bg-[#000000] focus:outline-[2px] py-6" />
                                <input type="text" placeholder="Company" className="input w-full max-w-xs rounded-full bg-[#000000] focus:outline-[2px] py-6" />
                            </div>
                            <textarea className="min-h-[150px] textarea rounded-xl bg-[#000000] focus:outline-[2px] w-full" placeholder="Tell us about your project"></textarea>

                            <div className="flex items-center gap-x-4 mt-6">
                                <button className="py-2 px-6 text-[#333] bg-[#27D294] rounded-full">Submit</button>
                                <div className="text-[#B1B5C3] text-[16px] flex items-center gap-x-2">
                                    <span>By clicking submit, I agree to Coder Squad’s </span>
                                    <Link href="/" className="hover:text-[#27D294]">Privacy Policy.</Link>
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