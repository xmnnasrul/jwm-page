import ReactPlayer from 'react-player'
import React from 'react'
import Poster from './../Assets/poster jwm.jpg'
import Logo from './../Assets/logo-project.png'
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
                        <div style={{width: '500px', height: '300px'}} className="Card-Content Card-content-video">
                            <ReactPlayer  url='https://youtu.be/gxtMUa783jY'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project