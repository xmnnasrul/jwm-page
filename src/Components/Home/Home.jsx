import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import HomeImg from './../Assets/hero.png'
import HeroImg2 from './../Assets/hero2.png'
import Logo from './../Assets/logo.jpeg'
import './Home.css'

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size
}

function Home() {
    const [width] = useWindowSize();
    return (
        <div className='Home'>
            {width < 600 ? (
                <div className='Home-Mobile'>
                    <h3>Welcome</h3>
                    <h4>To</h4>
                    <h3>Jwmpedia</h3>
                </div>
            ) : (

                <div>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide><img src={HeroImg2} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={Logo} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={HomeImg} alt="" /></SwiperSlide>
                    </Swiper>
                </div>
            )}
        </div>
    )
}


export default Home;