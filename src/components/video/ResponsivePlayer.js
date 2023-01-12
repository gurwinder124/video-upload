import React from 'react'
import ReactPlayer from 'react-player'
import './ReactPlayer.css'

const ResponsivePlayer = ({url, onProgress, isPlaying}) => {
    return (
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player'
                url={url}
                width='100%'
                height='100%'
                controls={true}
                onProgress={onProgress}
                playing={isPlaying}
                controlsList="nodownload"
            />
        </div>
    )
}

export default ResponsivePlayer;