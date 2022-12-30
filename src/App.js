import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import UploadForm from "./components/UploadForm";
import Thumbnail from "./components/thumb/Thumbnail";
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
 

    return (
        <Router>
           
            <Routes>
                <Route path="/" element={<UploadForm   />} />
                <Route path="/thumbnail" element={<Thumbnail />} />
                <Route path="/player" element={<Player />} />
            </Routes>
        </Router>
    )
};

export default App;
