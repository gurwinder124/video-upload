import React, { useState } from "react";
import axios from "axios";
import { BACKEND_URI } from "../config/constants";

const UploadForm = ({ getAllMedias,getProgres1 }) => {
  const [name, setName] = useState("");
  const [videos, setVideos] = useState([]);
  console.log("videos  ", videos)
  
  const hadleSubmit = (e) => {
    e.preventDefault();

    let formdata = new FormData();
    for (let key in videos) {
      formdata.append("videos", videos[key]);
    }

    formdata.append("name", name);

    function onUploadProgress(event) {
      var progressInfosData = Math.round(100 * event.loaded / event.total);
      console.log(" progressInfosData ", progressInfosData)
      getProgres1(progressInfosData)
    }

    const config = {
      'headers': {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: onUploadProgress
    };

    axios
      .post(`${BACKEND_URI}/api/v1/media/create`, formdata, config)
      .then((success) => {
        getAllMedias();
        alert("Submitted successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Error happened!");
      });
  };

  return (
    <>
      <form onSubmit={hadleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="videos">Upload Videos</label>
          <input
            type="file"
            name="videos"
            id="videos"
            multiple
            className="form-control"
            onChange={(e) => {
              setVideos(e.target.files);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </>
  );
};

export default UploadForm;
