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
    const video = videoRef.current;
    // Check if the video element is loaded
    if (video) {
      // Set the playback rate to 0.5 to play the video at half speed
      video.playbackRate = playbackSpeed;
    }

    // Function to stop fullscreen
    const preventFullScreen = (event: Event) => {
      event.preventDefault();
      if (event.stopPropagation) event.stopPropagation();
    };

    // Add event listeners to prevent fullscreen
    video?.addEventListener('fullscreenchange', preventFullScreen);
    video?.addEventListener('webkitfullscreenchange', preventFullScreen);
    video?.addEventListener('mozfullscreenchange', preventFullScreen);
    video?.addEventListener('MSFullscreenChange', preventFullScreen);

    return () => {
      // Clean up event listeners
      video?.removeEventListener('fullscreenchange', preventFullScreen);
      video?.removeEventListener('webkitfullscreenchange', preventFullScreen);
      video?.removeEventListener('mozfullscreenchange', preventFullScreen);
      video?.removeEventListener('MSFullscreenChange', preventFullScreen);
    };
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
