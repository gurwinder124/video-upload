import React from 'react'
import ReactPlayer from 'react-player'
import './ReactPlayer.css'

const ResponsivePlayer = ({url, onProgress}) => {
    return (
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player'
                url={url}
                width='40%'
                height='40%'
                controls={true}
                onProgress={onProgress}
            />
        </div>
    )
}

export default ResponsivePlayer;