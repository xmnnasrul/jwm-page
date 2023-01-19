import React, { useState, useEffect } from 'react'
import YouTube, { YouTubeProps } from 'react-youtube';
import Poster from './../Assets/poster jwm.jpg'
import Logo from './../Assets/logo-project.png'
import './Project.css'
import YoutubeMobile from './YoutubeMobile';

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
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    const opts: YouTubeProps['opts'] = {
        height: '250',
        width: '350',
        playerVars: {
            autoplay: 1,
        },
    };

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
                        <div className="Card-Mobile">
                            <div className="Card-Title">
                                <h4>Video</h4>
                            </div>
                            {/* <div className='Youtube'>
                                <YouTube videoId="gxtMUa783jY" autoplay='1' opts={opts} onReady={onPlayerReady} />
                            </div> */}
                            <YoutubeMobile />
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
                            <div className='Youtube'>
                                <YouTube videoId="gxtMUa783jY" autoplay='1' opts={opts} onReady={onPlayerReady} />
                            </div>
                        </div>
                    </div>
                )}


            </div>
        </>
    )
}

export default Project