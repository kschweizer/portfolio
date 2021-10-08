import React from 'react';
import YouTube from 'react-youtube';

export default function Youtube(props) {
    
    const opts = {
        height: props.width > 500 ? '360' : '225',
        width: props.width > 500 ? '640' : '400',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const _onReady = e => {
        e.target.stopVideo();
    };

    return (
        <div>
            <YouTube videoId={props.videoID} opts={opts} onReady={_onReady} />
        </div>
    )
};
