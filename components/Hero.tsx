
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const images = [
    'https://ik.imagekit.io/gambarid/ahlisanitasijogja/foto1?updatedAt=1769518486265',
    'https://ik.imagekit.io/gambarid/ahlisanitasijogja/foto2?updatedAt=1769518469974',
    'https://ik.imagekit.io/gambarid/ahlisanitasijogja/gambar1.png?updatedAt=1769419710849'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToLayanan = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('layanan');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative w-full h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out will-change-opacity ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              backgroundImage: `url('${image}')`,
              backgroundPosition: 'center center'
            }} 
            {...(index === 0 ? { "data-priority": "high" } : {})}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 bg-black/75 z-[1]"></div>

      <div className="relative z-10 w-full max-w-[1440px] px-6 flex flex-col items-center text-center">
        
        {/* Badge - Muncul Pertama (Tanpa Delay) */}
        <div className="inline-flex items-center bg-[#105133] text-white px-4 py-1.5 rounded-full mb-8 shadow-xl reveal">
          <div className="mr-2 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
              <path d="M10.95 12.7L9.50001 11.275C9.31668 11.0917 9.08768 11 8.81301 11C8.53835 11 8.30068 11.1 8.10001 11.3C7.91668 11.4833 7.82501 11.7167 7.82501 12C7.82501 12.2833 7.91668 12.5167 8.10001 12.7L10.25 14.85C10.45 15.05 10.6833 15.15 10.95 15.15C11.2167 15.15 11.45 15.05 11.65 14.85L15.9 10.6C16.1 10.4 16.1957 10.1667 16.187 9.89999C16.1783 9.63333 16.0827 9.39999 15.9 9.19999C15.7 8.99999 15.4627 8.89599 15.188 8.88799C14.9133 8.87999 14.6757 8.97566 14.475 9.17499L10.95 12.7ZM8.15001 21.75L6.70001 19.3L3.95001 18.7C3.70001 18.65 3.50001 18.521 3.35001 18.313C3.20001 18.105 3.14168 17.8757 3.17501 17.625L3.45001 14.8L1.57501 12.65C1.40835 12.4667 1.32501 12.25 1.32501 12C1.32501 11.75 1.40835 11.5333 1.57501 11.35L3.45001 9.19999L3.17501 6.37499C3.14168 6.12499 3.20001 5.89566 3.35001 5.68699C3.50001 5.47833 3.70001 5.34933 3.95001 5.29999L6.70001 4.69999L8.15001 2.24999C8.28335 2.03333 8.46668 1.88733 8.70001 1.81199C8.93335 1.73666 9.16668 1.74933 9.40001 1.84999L12 2.94999L14.6 1.84999C14.8333 1.74999 15.0667 1.73733 15.3 1.81199C15.5333 1.88666 15.7167 2.03266 15.85 2.24999L17.3 4.69999L20.05 5.29999C20.3 5.34999 20.5 5.47933 20.65 5.68799C20.8 5.89666 20.8583 6.12566 20.825 6.37499L20.55 9.19999L22.425 11.35C22.5917 11.5333 22.675 11.75 22.675 12C22.675 12.25 22.5917 12.4667 22.425 12.65L20.55 14.8L20.825 17.625C20.8583 17.875 20.8 18.1043 20.65 18.313C20.5 18.5217 20.3 18.6507 20.05 18.7L17.3 19.3L15.85 21.75C15.7167 21.9667 15.5333 22.1127 15.3 22.188C15.0667 22.2633 14.8333 22.2507 14.6 22.15L12 21.05L9.40001 22.15C9.16668 22.25 8.93335 22.2627 8.70001 22.188C8.46668 22.1133 8.28335 21.9673 8.15001 21.75Z" fill="#FDCD01"/>
            </svg>
          </div>
          <span className="text-[10px] md:text-[11px] font-bold tracking-[0.1em] uppercase">
            MURAH, TERJANGKAU, BERGARANSI
          </span>
        </div>

        {/* Headline - Muncul Kedua (Delay 300ms) */}
        <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.8rem] font-bold text-white leading-[1.1] tracking-tight mb-8 max-w-[1200px] reveal delay-300">
          Solusi <span className="text-[#FDCD01]">Sanitasi Profesional</span> di <br className="hidden md:block" />
          Yogyakarta & Sekitarnya
        </h1>

        {/* Sub-headline - Muncul Ketiga (Delay 700ms) */}
        <p className="text-white text-base md:text-lg lg:text-[21px] font-medium max-w-4xl mx-auto mb-12 opacity-95 leading-[1.8] px-6 reveal delay-700">
          Melayani Sedot WC, Saluran Mampet, dan Sumur bor untuk wilayah Jogja,<br className="hidden md:block" />
          Bantul, Sleman, Kulon Progo, hingga Gunungkidul.
        </p>

        {/* Buttons - Muncul Terakhir (Delay 1000ms) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 reveal delay-1000">
          <a 
            href="https://wa.me/6285641585196" 
            className="w-full sm:w-auto h-[54px] flex items-center justify-center bg-[#1E4DB7] text-white px-8 rounded-md font-bold text-base shadow-xl hover:brightness-110 transition-all hover:-translate-y-0.5 space-x-3"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Hubungi Kami – WhatsApp</span>
          </a>
          <a 
            href="#layanan" 
            onClick={scrollToLayanan}
            className="w-full sm:w-auto h-[54px] flex items-center justify-center bg-white text-[#111111] px-10 rounded-md font-bold text-base shadow-xl hover:bg-gray-100 transition-all cursor-pointer"
          >
            Layanan Kami
          </a>
        </div>
      </div>

      <div className="absolute bottom-[40px] inset-x-0 z-20 flex justify-center items-center gap-4 reveal delay-[1200ms]">
        {images.map((_, index) => (
          <div 
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3.5 h-3.5 rounded-full shadow-sm cursor-pointer transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-[#FDCD01] border-2 border-[#FDCD01]' 
                : 'bg-white/40 hover:bg-white border-2 border-transparent'
            }`}
          ></div>
        ))}
      </div>
      
      <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-[2]"></div>
    </section>
  );
};

export default Hero;