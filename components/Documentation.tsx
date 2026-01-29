
import React, { useState, useRef } from 'react';

const Documentation: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section id="dokumentasi" className="bg-white py-32 px-6 md:px-10 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20 reveal">
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#111111] mb-4">
            Dokumentasi Kami
          </h2>
          <div className="w-24 h-[6px] bg-[#FDCD01] rounded-full mx-auto"></div>
        </div>

        {/* Video Player Container */}
        <div className="relative w-full max-w-[1100px] mx-auto bg-[#2D2D2D] rounded-[24px] overflow-hidden aspect-video shadow-2xl flex items-center justify-center group reveal delay-200">
          
          {/* The Video Element */}
          <video 
            ref={videoRef}
            className="h-full w-auto max-w-full cursor-pointer bg-black"
            onPause={handlePause}
            onEnded={handlePause}
            onPlay={handlePlay}
            onClick={togglePlay}
            controls
            preload="metadata" // Changed to metadata to show the first frame as a thumbnail
            playsInline
          >
            <source src="https://ik.imagekit.io/gambarid/ahlisanitasijogja/WC%20Mampet%20(2).mp4" type="video/mp4" />
            Browser Anda tidak mendukung tag video.
          </video>

          {/* Large Play Button Overlay */}
          <div 
            className={`absolute inset-0 flex items-center justify-center cursor-pointer z-10 bg-black/20 group-hover:bg-black/10 transition-all duration-300 ${
              isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            onClick={togglePlay}
          >
            <div className="w-16 h-16 md:w-24 md:h-24 bg-[#FDCD01] rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
               <svg 
                 className="w-8 h-8 md:w-12 md:h-12 text-[#111111] ml-1.5" 
                 fill="currentColor" 
                 viewBox="0 0 24 24"
               >
                 <path d="M8 5v14l11-7z" />
               </svg>
            </div>
          </div>
        </div>

        <p className="text-center mt-12 text-[#4B5563] font-medium opacity-70 max-w-xl mx-auto reveal delay-300">
          Lihat cuplikan pengerjaan tim Ahli Sanitasi Jogja secara langsung.
        </p>
      </div>
    </section>
  );
};

export default Documentation;
