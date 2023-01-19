import React, { useState, useEffect } from 'react'
import Poster from './../Assets/poster jwm.jpg'
import Logo from './../Assets/logo-project.png'
import './Project.css'

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

function Project() {
    const [width] = useWindowSize();
    return (
        <>
            <div className="Project">
                <div className="Title-Project">
                    <h2>Our Project</h2>
                </div>
                {width < 600 ? (
                    <div className='Project-Mobile'>
                        <div className="Card-Mobile Logo">
                            <div className="Card-Title">
                                <h4>Logo</h4>
                            </div>
                            <div className="Card-Content">
                                <a href={Logo} target="_blank" rel='noreferrer'>
                                    <img src={Logo} alt="logo" />
                                </a>
                            </div>
                        </div>

                        <div className="Card-Mobile Logo">
                            <div className="Card-Title">
                                <h4>Poster</h4>
                            </div>
                            <div className="Card-Content">
                                <a href={Poster} target="_blank" rel='noreferrer'>
                                    <img src={Poster} alt="logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="Content-Project">
                        <div className="Card Logo">
                            <div className="Card-Title">
                                <h4>Logo</h4>
                            </div>
                            <div className="Card-Content">
                                <a href={Logo} target="_blank" rel='noreferrer'>
                                    <img src={Logo} alt="logo" />
                                </a>
                            </div>
                        </div>

                        <div className="Card Poster">
                            <div className="Card-Title">
                                <h4>Poster</h4>
                            </div>
                            <div className="Card-Content">
                                <a href={Poster} target="_blank" rel='noreferrer'>
                                    <img src={Poster} alt="poster" />
                                </a>

                            </div>
                        </div>
                        <div className="Card Video">
                            <div className="Card-Title">
                                <h4>Video</h4>
                            </div>
                            {/* <div style={{width: '500px', height: '300px'}} className="Card-Content Card-content-video">
                            <ReactPlayer  url='https://youtu.be/gxtMUa783jY'/>
                        </div> */}
                        </div>
                    </div>
                )}


            </div>
        </>
    )
}

export default Project