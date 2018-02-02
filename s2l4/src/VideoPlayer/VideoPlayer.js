import React, { Component } from 'react';
import PropTypes from 'prop-types';
import video from './Video.mp4';

class VideoPlayer extends Component {

    static displayName = 'VideoPlayer';

    playVideo = () => {
        this.video.play();
    }

    pauseVideo = () => {
        this.video.pause();
    }

    render() {
        return (
            <div>
                <video ref={c => (this.video = c)} width="320" height="240"> 
                    <source src={video} type="video/mp4"  />
                </video>
                <button onClick={this.playVideo}>Play</button>
                <button onClick={this.pauseVideo}>Stop</button>
            </div>
        );
    }
}

export default VideoPlayer;