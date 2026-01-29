
import React from 'react';

interface ServiceItem {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const services: ServiceItem[] = [
  {
    title: "Pembuatan Sumur Bor",
    description: "Pengeboran sumur untuk kebutuhan air bersih rumah tangga maupun industri dengan kedalaman yang disesuaikan.",
    image: "https://ik.imagekit.io/gambarid/ahlisanitasijogja/ahlisanitasi1.png?updatedAt=1769515900230",
    alt: "Jasa Pembuatan Sumur Bor Jogja Terdekat"
  },
  {
    title: "Pembuatan Sumur Timba",
    description: "Pembuatan sumur tradisional galian manual dengan struktur yang kokoh dan aman.",
    image: "https://ik.imagekit.io/gambarid/ahlisanitasijogja/ahlisanitasi2.png?updatedAt=1769516133738",
    alt: "Tukang Gali Sumur Timba Yogyakarta Profesional"
  },
  {
    title: "Pembuatan Resapan",
    description: "Sistem drainase dan resapan air untuk mencegah genangan dan menjaga kualitas tanah.",
    image: "https://ik.imagekit.io/gambarid/ahlisanitasijogja/image3.png",
    alt: "Jasa Pembuatan Resapan Air Limbah dan Septic Tank Jogja"
  },
  {
    title: "Sedot WC",
    description: "Layanan kuras septic tank profesional dengan armada yang bersih dan pengerjaan tuntas.",
    image: "https://ik.imagekit.io/gambarid/ahlisanitasijogja/image4.png",
    alt: "Jasa Sedot WC Jogja Murah Bergaransi - Sleman Bantul Yogyakarta"
  },
  {
    title: "WC & Saluran Mampet",
    description: "Pelancaran saluran WC mampet dan wastafel mampet tanpa bongkar, cepat dan efisien.",
    image: "https://ik.imagekit.io/gambarid/ahlisanitasijogja/image5.png",
    alt: "Ahli Saluran Mampet Jogja - Solusi WC Tersumbat Yogyakarta"
  },
  {
    title: "Servis Pompa Air",
    description: "Perbaikan berbagai merek pompa air, penggantian spare part, dan optimasi aliran air.",
    image: "https://ik.imagekit.io/gambarid/ahlisanitasijogja/image7.png",
    alt: "Jasa Servis Pompa Air Jogja - Tukang Pompa Panggilan Terdekat"
  }
];

const Services: React.FC = () => {
  return (
    <section id="layanan" className="bg-[#F8FAFC] py-32 px-6 md:px-10 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20 reveal">
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#111111] mb-4">
            Layanan Kami
          </h2>
          <div className="w-24 h-[6px] bg-[#FDCD01] rounded-full mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100 flex flex-col h-full reveal delay-${(index % 3) * 100}`}
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                <img 
                  src={service.image} 
                  alt={service.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Text Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-[#1E4DB7] text-[22px] font-bold mb-4 tracking-tight leading-tight">
                  {service.title}
                </h3>
                <p className="text-[#4B5563] text-sm md:text-[15px] leading-[1.7] font-medium opacity-90">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
