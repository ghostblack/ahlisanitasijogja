
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="kontak" className="bg-[#0B1221] text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto pt-24 pb-20 px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Company Info Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://ik.imagekit.io/gambarid/ahlisanitasijogja/amin.png" 
                alt="Logo" 
                className="h-9 w-auto"
              />
              <span className="text-xl font-bold tracking-tight">Ahli Sanitasi Jogja</span>
            </div>
            <p className="text-gray-400 text-[15px] md:text-base leading-relaxed max-w-sm opacity-80 font-medium">
              Kami adalah tim ahli profesional yang berdedikasi tinggi dalam melayani sanitasi masyarakat Yogyakarta. Kepercayaan pelanggan adalah prioritas kami dengan memberikan jaminan garansi pada setiap layanan
            </p>
          </div>

          {/* Contact Information Column */}
          <div className="lg:col-span-4 lg:pl-12">
            <h3 className="text-lg font-bold mb-8 tracking-wide">Informasi Kontak</h3>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-[#1E4DB7]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.82 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <a 
                  href="https://wa.me/6285641585196" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-base text-gray-300 font-medium hover:text-white transition-colors"
                >
                  085641585196
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-[#1E4DB7]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <a 
                  href="mailto:ahlisanitasijogja@gmail.com"
                  className="text-base text-gray-300 font-medium hover:text-white transition-colors"
                >
                  ahlisanitasijogja@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#1E4DB7]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <span className="text-base text-gray-300 font-medium leading-snug">Jalan Imogiri Timur KM. 12, Trimulyo, Jetis, Bantul DIY</span>
              </div>
            </div>
          </div>

          {/* Social Media Column */}
          <div className="lg:col-span-3 lg:text-right">
            <h3 className="text-lg font-bold mb-8 tracking-wide">Sosial Media</h3>
            <div className="flex items-center gap-5 lg:justify-end">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/ahli_sanitasijogja" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/95 p-2 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-sm"
              >
                <svg className="w-6 h-6 text-[#0B1221]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/AhliSanitasiJogja" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/95 p-2 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-sm"
              >
                <svg className="w-6 h-6 text-[#0B1221]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Yellow Bottom Bar */}
      <div className="bg-[#FDCD01] py-4">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <p className="text-[#0B1221] font-bold text-sm md:text-base tracking-tight">
            @2026 AhliSanitasiJogja. Allrightsreserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
