import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Reviews = () => {
    return (
        <div className="max-w-[1500px] lg:md:px-8 px-4 mx-auto my-auto lg:md:mt-[15rem] mt-20">
            <div className="mb-10">
                <p className="text-[#777e90] uppercase mb-4">TESTIMONIAL</p>
                <h2 className="lg:md:text-5xl font-bold text-[#eee]">Customers love us, and have great things to say.</h2>
            </div>

            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        
                    </SwiperSlide>

                </Swiper>

            </div>
        </div>
    );
};

export default Reviews;