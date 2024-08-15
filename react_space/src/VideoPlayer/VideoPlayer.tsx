import React from 'react';

interface VideoComponentProps {
  videoSrc: string;
  videoType: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({
  videoSrc,
  videoType = 'video/mp4',
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  className = '',
}) => {
  return (
    <div className={`video-container ${className}`}>
      <video
        src={videoSrc}
        type={videoType}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        className="w-full h-auto"
      />
    </div>
  );
};

export default VideoComponent;
