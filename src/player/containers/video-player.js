import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';

class VideoPlayer extends Component {
    state={
        pause: true,
        duration: 0,
    }
    togglePlay = (event) => {
        this.setState({
            pause: !this.state.pause
        })
    }
    componentDidMount(){
        this.setState({
            pause: !this.props.autoplay 
        })
    }
    handleLoadedMetaData = event => {
        this.video = event.target;
        this.setState({
            duration: this.state.duration
        })
       
    }

    render(){
        return (
            <VideoPlayerLayout> 
                 <Title title= "Video lindo"/>
                 <Controls>
                    <PlayPause pause={this.state.pause} handleClick={this.togglePlay}/>
                    <Timer duration={this.state.duration}/>
                 </Controls>
                 <Video
                    handleLoadedMetaData={this.handleLoadedMetaData}
                    autoplay={this.props.autoplay} //true
                    pause={this.state.pause}
                    src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"/>
            </VideoPlayerLayout>
        )
    }
}
export default VideoPlayer;
