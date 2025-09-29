import React from 'react';

const BackgroundVideo = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="https://cdn.pixabay.com/video/2015/10/30/1219-144094441_large.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;