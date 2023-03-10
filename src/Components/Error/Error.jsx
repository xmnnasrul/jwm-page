import React from 'react'

function Error() {
    return (
        <><div class="wrapper">
            <div class="container">
                <div class="grid-row">
                    <div class="colmun colmun-left">
                        <img src="image-left.png" alt="left" />
                        <h1 class="px-spc-b-20">We can't find the page you are looking for.</h1>
                        <span class="px-spc-b-20">This page has been relocated or removed.</span>
                        <button class="go-home"><i class="fa fa-home"></i> Go Home</button>
                    </div>
                    <div class="colmun colmun-right">
                        <img src="right-shape.png" alt="right-shape" />
                    </div>
                </div>
            </div>
        </div></>
    )
}

export default Error