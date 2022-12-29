import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import axios from "axios";
import { BACKEND_URI } from "../config/constants";

function DropZone({ getAllMedias,getProgres1 }) {
    const onDrop = useCallback(acceptedFiles => {
        console.log("test")

        let formdata = new FormData();
    for (let key in acceptedFiles) {
      formdata.append("videos", acceptedFiles[key]);
    }

    formdata.append("name", "test-video");

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

    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
    )
}

export default DropZone;