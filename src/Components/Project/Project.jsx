import React from 'react'
import Poster from './../Assets/poster jwm.jpg'
import VideoProject from './../Assets/jwm video.png'
import VideoProjectPopUp from './../Assets/jwm video popup.mp4'
import Logo from './../Assets/logo.png'
import './Project.css'
function Project() {
    return (
        <>
            <div className="Project">
                <div className="Title-Project">
                    <h2>Our Project</h2>
                </div>
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
                        <div className="Card-Content">
                        <a href={VideoProjectPopUp} target="_blank" rel='noreferrer'>
                            <img src={VideoProject} alt="video project" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project