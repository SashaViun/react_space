import React from 'react';
import './VideoPlayer.css'

interface VideoPlayerProps {
  src: string;
  type?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  type = 'video/mp4',
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  className = '',
}) => {
  return (
    <video
      className={className}
      controls={controls}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
    >
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
