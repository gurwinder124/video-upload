
import React, { useRef, useState, useEffect } from "react";
import './Thumbnail.css';
import ResponsivePlayer from "../video/ResponsivePlayer";

function Thumbnail() {
    let [showImage, setShowImage] = useState(false)

    let [isPlaying, setIsPlaying] = useState(true)
    let handleWatch = (state) => {
        console.log(state)
        if( state.playedSeconds > 15 && state.playedSeconds < 20){
            // console.log("worked")
            setShowImage(true)
            // setIsPlaying(false)
            setTimeout(() => {
                console.log('This will run after 5 second!')
                setShowImage(false)
                // setIsPlaying(true)
                
            }, 5000);
        }
    }
    
    return (
        <div className="row">
            <div className="col-md-12">
                <div
                    className="card"
                    style={{
                        height: "auto",
                        width: "800px",
                        margin: "40px",
                        border: "1px solid black",
                    }}
                >
                    <div className="card-body">
                        <div  className="video-wrapper">
                            <span className={`thumbnail ${showImage ? "show" : "hide"}`}></span>
                            {/* <video
                                controls
                                className="video__player"
                            >
                                <source src="/big_buck_bunny.mp4" type="video/mp4" />
                            </video> */}
                            {/* <i className="watermark"><img src="/logo192.png" alt="logo" /></i> */}
                            <ResponsivePlayer 
                                url="http://localhost:3000/big_buck_bunny.mp4" 
                                onProgress={handleWatch}
                                isPlaying={isPlaying}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

// function Thumbnail({ cloudName, videoId, watermarkId }) {

//     // set up a Cloudinary URL to use your cloud name and display video
//     let videoSource = `https://res.cloudinary.com/${cloudName}/video/upload`;

//     // automatically adjust the quality and set the video to 600px wide
//     videoSource += "/q_auto,w_600";

//     // for watermarks, replace folder slashes with colons
//     const watermark = `l_${watermarkId.replace("/", ":")}`;

//     // add the watermark to the bottom-right of the video,
//     // and set it to 100px wide, offset 20px from the edges
//     videoSource += `/${watermark},g_south_east,w_500,x_20,y_20`;

//     // set the publicId to display the video as an MP4
//     videoSource += `/${videoId}.mp4`;

//     // add the full URL to a standard HTML5 video element
//     return (
//         <video controls>
//             <source src={videoSource} type="video/mp4" />
//         </video>
//     );
// }

// import React from "react";
// import { DefaultPlayer as Video } from 'react-html5video';
// import 'react-html5video/dist/styles.css';

// function Thumbnail() {
//     return (
//         <div className='row'>
//             <div className="col-md-12">
//                 <div
//                     className="card"
//                     style={{
//                         height: "auto",
//                         width: "800px",
//                         margin: "40px",
//                         border: "1px solid black",
//                     }}
//                 >
//                     <div className="card-body">
//                         <Video
//                             controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
//                             onCanPlayThrough={() => {
//                                 console.log("test")
//                             }}>
//                             <source src="/back.mp4" type="video/mp4" />
//                             <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />
//                         </Video>
//                     </div>

//                 </div>
//             </div>
//         </div>

//     );
// }

export default Thumbnail;