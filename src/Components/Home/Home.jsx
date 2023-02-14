import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// import Loader from './Loader'
import { Link } from 'react-router-dom';
import "swiper/css";
// import { Animated } from "react-animated-css";
import "swiper/css/pagination";
import { Pagination, Keyboard } from "swiper";
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
                    {/* <Animated animationIn='fadeInDown' isVisible={true} animationOutDelay={3000} animationOut='fadeOutUp' animationInDuration={1000} animationOutDuration={1000}> */}
                    <h3>Welcome</h3>
                    {/* </Animated> */}
                    <h4>To</h4>
                    <h3>Jwmpedia</h3>
                </div>
            ) : (
                <div>
                    <div className='destop'>
                        <Swiper slidesPerView={1} spaceBetween={30} keyboard={{ enabled: true }} pagination={{ dynamicBullets: true, clickable: true }} modules={[Pagination, Keyboard]} loop={[true]} className="mySwiper">
                            <SwiperSlide><img src={Logo} alt="gambar1" /></SwiperSlide>
                            <SwiperSlide><img src={HeroImg2} alt="gambar2" /></SwiperSlide>
                            <SwiperSlide><img src={HomeImg} alt="gambar3" /></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="welcome">
                        <h1>selamat datang di website kami</h1>
                        <h5>kami menyediakan jasa joki mobile legends dengan proses yang cepat dan terpercaya</h5>
                        <Link to="/jasa" style={{ textDecoration: "none" }}>
                            <button className='button-80'>Mau Joki Bang</button >
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}


export default Home;