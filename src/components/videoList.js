import React from "react";
import VideoListItem from "./videoListItem";

const VideoList = (props) => {
    return (
        <ul>
            {props.videos.map((video, i) => {
                return (
                    <VideoListItem key={video.etag} video={video} />
                );
            })}
        </ul>
    );
}

export default VideoList;