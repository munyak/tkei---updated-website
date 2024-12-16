import React from 'react';

interface HeroVideoProps {
  className?: string;
}

const HeroVideo: React.FC<HeroVideoProps> = ({ className = '' }) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 z-10" />
      <div className="w-[102%] h-[102%] -translate-x-[1%] -translate-y-[1%]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`w-full h-full object-cover gimbal-effect ${className}`}
          poster="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
        >
          <source 
            src="https://tkei.s3.us-west-1.amazonaws.com/website/videos/banner.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default HeroVideo;