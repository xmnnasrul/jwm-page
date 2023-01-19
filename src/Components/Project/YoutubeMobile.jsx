import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube';

function YoutubeMobile() {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    const opts: YouTubeProps['opts'] = {
        height: '250',
        width: '290',
        playerVars: {
            autoplay: 1,
        },
    };
    return (
        <div>
            <div className='Youtube'>
                <YouTube videoId="gxtMUa783jY" autoplay='1' opts={opts} onReady={onPlayerReady} />
            </div>
        </div>
    )
}

export default YoutubeMobile