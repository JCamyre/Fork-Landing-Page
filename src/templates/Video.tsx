import React, { useEffect, useRef } from 'react';

interface VideoPlayerProps {
  src: string; // the path to the video file
  type: string; // the MIME type of the video
  playbackSpeed: number;
}

function VideoPlayer({ src, type, playbackSpeed }: VideoPlayerProps) {
  // Use useRef to get a reference to the video element
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if the video element is loaded
    if (videoRef.current) {
      // Set the playback rate to 0.5 to play the video at half speed
      videoRef.current.playbackRate = playbackSpeed;
    }
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <video loop={true} autoPlay={true} ref={videoRef} muted>
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
