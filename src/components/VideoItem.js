import React from 'react'
import './VideoItem.css';


const VideoItem = ({video, onVideoSelect}) =>  {
        
        return (
            <div onClick={() => onVideoSelect(video)} className="video-item item" >
                <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} alt="videa" />
                <div className="content">
                    <div className="header">{video.snippet.title}</div>
                </div>
                <br />
            </div>
        )
    
}

export default VideoItem

