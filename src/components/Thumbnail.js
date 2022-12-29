import React from "react";
// import React, { useRef, useState, useEffect } from "react";
// import './Thumbnail.css';

// function Thumbnail({ video_src, watermarkImg }) {

//   // add the full URL to a standard HTML5 video element
//   const [playing, setPlaying] = useState(false);
//   const videoRef = useRef(null);
//                                       //NEED HELP OVER HERE
//     useEffect(() => {
//     let video = document.querySelector("video");
//     let observer = new IntersectionObserver(
//       (entry) => {
        
//       },
//       { threshold: 1 }
//     );
//     observer.observe(video);
//   }, [playing]);

//   const handleVideoPress = () => {
//     console.log("test")
//     if (playing) {
//       videoRef.current.pause();
//       setPlaying(false);
//     } else {
//       videoRef.current.play();
//       setPlaying(true);
//     }
//   };

//   return (
//     <div className="video-wrapper">
//         <video 
//             ref={videoRef} 
//             controls 
//             onClick={handleVideoPress}
//             className="video__player"
//             >
//             <source src={video_src} type="video/mp4" />
//         </video>
//         <i className="watermark"><img src={watermarkImg} alt="logo"/></i>
        
//     </div>
    
//   );
// }

// function Thumbnail({ cloudName, videoId, watermarkId }) {

//   // set up a Cloudinary URL to use your cloud name and display video
//   let videoSource = `https://res.cloudinary.com/${cloudName}/video/upload`;

//   // automatically adjust the quality and set the video to 600px wide
//   videoSource += "/q_auto,w_600";

//   // for watermarks, replace folder slashes with colons
//   const watermark = `l_${watermarkId.replace("/", ":")}`;

//   // add the watermark to the bottom-right of the video,
//   // and set it to 100px wide, offset 20px from the edges
//   videoSource += `/${watermark},g_south_east,w_500,x_20,y_20`;

//   // set the publicId to display the video as an MP4
//   videoSource += `/${videoId}.mp4`;

//   // add the full URL to a standard HTML5 video element
//   return (
//     <video controls>
//       <source src={videoSource} type="video/mp4" />
//     </video>
//   );
// }

import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

function Thumbnail() {
    return (
        <Video
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            onCanPlayThrough={() => {
                console.log("test")
            }}>
            <source src="/back.mp4" type="video/mp4" />
            <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />
        </Video>
    );
}

export default Thumbnail;