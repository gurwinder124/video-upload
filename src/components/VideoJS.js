import React, { useState, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export const VideoJS = () => {
    const [playing, setPlaying] = useState  (false);

    
    useEffect(() => {
        var options = {};
        var player = videojs('my-player', {});

        // player.addEventListener("timeupdate", function tick(e){
        //     console.log("timeupdate update 02")
            
        // });

        // player.updateContent(function tick(e){
        //     console.log("timeupdate update 02")     
        // })

    });


    return (
        <div className="col-md-12">
            <div className="card" >
                <div className="card-body"
                    style={{
                        height: "auto",
                        width: "800px",
                        margin: "40px",
                        border: "1px solid black",
                    }}
                    >
                    <video id="my-player"  className="video-js"
                        controls
                        preload="auto"
                        data-setup='{}' >
                        <source src="/back.mp4" type="video/mp4"></source>
                    </video>
                </div>
            </div>
        </div>
    );
}

// export default VideoJS;