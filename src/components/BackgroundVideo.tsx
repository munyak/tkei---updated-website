import React from 'react';

interface BackgroundVideoProps {
  className?: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ className = '' }) => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className={`w-full h-full object-cover ${className}`}
      poster="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
    >
      <source 
        src="https://player.vimeo.com/progressive_redirect/playback/452613342/rendition/1080p/file.mp4?loc=external"
        type="video/mp4"
      />
    </video>
  );
};

export default BackgroundVideo;