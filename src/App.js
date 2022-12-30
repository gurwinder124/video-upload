import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import UploadForm from "./components/UploadForm";
import Thumbnail from "./components/Thumbnail";
import Progress from "./components/Progress";
import { BACKEND_URI } from "./config/constants";
import { VideoJS } from "./components/VideoJS";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Player} from "./components/video/Player";

// import VideoJS from "./components/Video";

const App = () => {
    const [medias, setMedias] = useState([]);
    const [progressPercentage, setProgress] = useState("");
    const playerRef = React.useRef(null);

    useEffect(() => {
        getAllMedias();
    }, []);

    const getAllMedias = () => {
        axios
            .get(`${BACKEND_URI}/api/v1/media/all`)
            .then((result) => {
                setMedias(result.data);
            })
            .catch((error) => {
                setMedias([]);
                console.log(error);
                alert("Error happened!");
            });
    };

    

    
    // return (
    //     <>
    //         <div className="row">
    //             <div id="myModal">

    //             </div>
    //             <div className="col-md-12">
    //                 <div className="card" >
    //                     <div className="card-body"
    //                     style={{
    //                         height: "auto",
    //                         width: "800px",
    //                         margin: "40px",
    //                         border: "1px solid black",
    //                     }}
    //                     >
    //                         <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    //                     </div>
    //                 </div>
    //             </div>

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
    //                         <Progress percentage={progressPercentage} />
    //                     </div>
    //                     <div className="card-body">
    //                         <UploadForm getAllMedias={getAllMedias} getProgres1={getProgres} />
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="col-md-12">
    //                 <div
    //                     className="card"
    //                     style={{
    //                         height: "auto",
    //                         width: "800px",
    //                         margin: "40px"
    //                     }}
    //                 >

    //                     <div className="card-body">
    //                         <DropZone getAllMedias={getAllMedias} getProgres1={getProgres} />
    //                     </div>
    //                 </div>
    //             </div>
    //             {/* <div className="col-md-12">
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
    //                         <Thumbnail />
    //                     </div>

    //                 </div>
    //             </div> */}
    //         </div>
    //     </>
    // );

    return (
        <Router>
           
            <Routes>
                <Route path="/" element={<UploadForm   />} />
                <Route path="/video-js" element={<VideoJS />} />
                <Route path="/player" element={<Player />} />
            </Routes>
        </Router>
    )
};

export default App;
