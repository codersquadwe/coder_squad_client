import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Typewriter from 'typewriter-effect';

const Banner = () => {


       const handleConsultationButtonClick = () => {
        window.open('https://calendly.com/afnanferdousi550/30min/book?primary_color=051d42', '_blank');
    };
    return (
        <div className="lg:md:flex lg:md:flex-row-reverse items-center justify-between max-w-[1320px] lg:md:px-4 px-4 mx-auto h-[90vh] my-auto">
            <div
                data-aos="fade-left"
                data-aos-duration="3000"
             >
               
                <Player
                    autoplay
                    loop
                    src="https://lottie.host/b8d790a7-25db-4f95-b91a-375b95fd17e6/EqdKja9yhk.json"
                    className="lg:md:w-[30vw] lg:md:h-[600px] h-[50vh] w-[80vw]"
                >
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
            </div>
            <div
                data-aos="fade-right"
                data-aos-duration="3000"
                className='text-[#f5f5f5] font-inter leading-10 w-full'>
                     <div className="lg:md:hidden block text-[12px]">
                    <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('Your Vision, Our Expertise - Turning Ideas into Reality')                            
                            .pauseFor(2500)
                            .deleteAll()
                            .start();
                    }}
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 50
                    }}
                />
                </div>
                <h1 className="lg:md:text-[3.6rem] text-[1.6rem] font-bold leading-10 bg-gradient-to-r from-violet-900 via-blue-500 to-green-300 text-transparent bg-clip-text animate-text">From Ideas to Execution</h1>
                <h1 className="lg:md:pt-6 pt-2 lg:md:text-5xl text-[1.2rem] font-medium leading-10 mb-12">Coder Squad Paving the Way</h1>
                <div className="lg:md:block hidden">
                    <Typewriter
                    onInit={(typewriter) => {
                    typewriter.typeString('Your Vision, Our Expertise - Turning Ideas into Reality')                            
                            .pauseFor(2500)
                            .deleteAll()
                            .start();
                    }}
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 50
                    }}
                />
                </div>

                <button
                onClick={handleConsultationButtonClick} 
                className="bg-[#f5f5f5] text-[#051d42] font-medium lg:md:text-[16px] text-[14px] px-6 py-[5px] rounded-lg mt-6">Get Free Consultancy ✨</button>
            </div>

        </div>
    );
};

export default Banner;