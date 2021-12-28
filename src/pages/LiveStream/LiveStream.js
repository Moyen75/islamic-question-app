import React, { useEffect, useState } from 'react';

const LiveStream = () => {
    const [mute, setMute] = useState(false)
    const streamCamVideo = () => {
        var constraints = { audio: true, video: { width: 450, height: 300 } };
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(function (mediaStream) {
                var video = document.querySelector("video");

                video.srcObject = mediaStream;
                video.onloadedmetadata = function (e) {
                    video.play();
                };
            })
            .catch(function (err) {
                console.log(err.name + ": " + err.message);
            }); // always check for errors at the end.
    }
    const muteStream = () => {
        setMute(true)
    }
    // useEffect(()=>{
    //   streamCamVideo()
    // },[])
    return (
        <div>
            <video muted={mute} controls="controls" autoPlay={true} id="videoElement" ></video>
            <br />
            <button onClick={streamCamVideo}>start LiveStream</button>
            <button onClick={muteStream}>Mute stream</button>
        </div>
    );
};

export default LiveStream;