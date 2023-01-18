import React from 'react'
import Poster from './../Assets/poster jwm.jpg'
import VideoProject from './../Assets/jwm video.png'
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
                            {/* <img src="" alt="" /> */}
                        </div>
                    </div>
                    <div className="Card Poster">
                        <div className="Card-Title">
                            <h4>Poster</h4>
                        </div>
                        <div className="Card-Content">
                    
                            <img src={Poster} alt="poster" /> 
                           
                        </div>
                    </div>
                    <div className="Card Video">
                        <div className="Card-Title">
                            <h4>Video</h4>
                        </div>
                        <div className="Card-Content">
                             <img src={VideoProject} alt="video project" /> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project