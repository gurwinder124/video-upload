import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import UploadForm from "./components/UploadForm";
import Thumbnail from "./components/Thumbnail";
import Progress from "./components/Progress";
import DropZone from "./components/DropZone";
import { BACKEND_URI } from "./config/constants";
import { VideoJS } from "./components/VideoJS";

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
    function getProgres(e) {
        setProgress(e)
    }

    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [{
            src: '/back.mp4',
            type: 'video/mp4'
        }]
    };


    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on('waiting', () => {
            // videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            // videojs.log('player will dispose');
        });
    };
    useEffect(()=>{
         const handlePlayerReady = (player) => {
            playerRef.current = player;
            console.log(  player,"player111")
         }
      
    },[ playerRef.current])
    return (
        <>
            <div className="row">
                <div id="myModal">

                </div>
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
                            <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
                        </div>
                    </div>
                </div>

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
                            <Progress percentage={progressPercentage} />
                        </div>
                        <div className="card-body">
                            <UploadForm getAllMedias={getAllMedias} getProgres1={getProgres} />
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div
                        className="card"
                        style={{
                            height: "auto",
                            width: "800px",
                            margin: "40px"
                        }}
                    >

                        <div className="card-body">
                            <DropZone getAllMedias={getAllMedias} getProgres1={getProgres} />
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-12">
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
                            <Thumbnail />
                        </div>

                    </div>
                </div> */}
            </div>
        </>
    );
};

export default App;
