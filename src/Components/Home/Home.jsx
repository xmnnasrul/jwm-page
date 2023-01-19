import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import HomeImg from './../Assets/hero.png'
import HeroImg2 from './../Assets/hero2.png'
import Logo from './../Assets/logo.jpeg'
import './Home.css'
function Home() {

    return (
        <div className='Home'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img src={HeroImg2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Logo} alt="" /></SwiperSlide>
                <SwiperSlide><img src={HomeImg} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Home;