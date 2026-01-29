
import React from 'react';

const Area: React.FC = () => {
  const areas = [
    { name: 'Jogja/Kota' },
    { name: 'Sleman' },
    { name: 'Gunungkidul' },
    { name: 'Bantul' },
    { name: 'Kulonprogo' },
  ];

  return (
    <section id="area" className="py-16 md:py-32 px-4 md:px-10 lg:px-20 bg-white">
      <div className="max-w-[1440px] mx-auto reveal">
        <div className="relative bg-[#064E3B] rounded-[32px] md:rounded-[40px] py-12 md:py-20 px-6 md:px-8 overflow-hidden shadow-2xl">
          {/* Decorative shapes (abstract circles from the image) */}
          <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-black/10 rounded-full -mr-16 -mt-16 md:-mr-20 md:-mt-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-black/10 rounded-full -ml-12 -mb-12 md:-ml-16 md:-mb-16"></div>

          <div className="relative z-10">
            <h2 className="text-center text-white text-2xl md:text-[32px] font-bold mb-12 md:mb-20">
              Jangkauan Wilayah Kami
            </h2>

            {/* Areas Grid - Optimized for Mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap justify-center items-start gap-8 md:gap-16 lg:gap-24 mb-12 md:mb-20">
              {areas.map((area, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col items-center gap-3 md:gap-5 group ${index === areas.length - 1 && (areas.length % 2 !== 0) ? 'col-span-2 sm:col-span-1' : ''}`}
                >
                  <div className="w-14 h-14 md:w-20 md:h-20 bg-white/10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
                    <svg 
                      className="w-7 h-7 md:w-10 md:h-10 text-[#FDCD01]" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <span className="text-white text-sm md:text-lg font-medium opacity-90 tracking-wide text-center">
                    {area.name}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button - Enhanced Mobile Proportions */}
            <div className="flex justify-center px-2">
              <a 
                href="https://wa.me/6285641585196"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#1E4DB7] hover:bg-[#1E4DB7]/90 text-white font-bold py-4 px-6 md:px-10 rounded-xl md:rounded-md transition-all shadow-lg active:scale-95 text-sm md:text-base text-center leading-tight"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Panggil Tukang Sekarang – Chat WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Area;
