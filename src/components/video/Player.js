import React, {useState }from 'react'
import ReactPlayer from 'react-player'
import ResponsivePlayer from "./ResponsivePlayer";

export const Player = () => {
    let [watchComplete, setWatchComplete] = useState(false)
    let handleWatch = (state) => {
        console.log(state.playedSeconds)
    }
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
                    <ResponsivePlayer 
                        url="http://localhost:3000/back.mp4" 
                        onProgress={handleWatch}
                    />
                </div>
            </div>
        </div>
    );
}