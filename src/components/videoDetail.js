import React from "react";

const VideoDetail = (props) => {
    const videoUrl = `"https://www.youtube.com/embed/${props.video.id.videoId}`;
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={videoUrl} className="embed-responsive-item"></iframe>
            </div>
            <div className="details">
                <div>{props.video.snippet.title}</div>
                <div>{props.video.snippet.description}</div>
            </div>
        </div>
    );
}

export default VideoDetail;