import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    image: '/images/banner1.jpg', // You can use public folder
    title: 'Donate Your Books',
    text: 'Give your old books a new life and help students in need.',
  },
  {
    id: 2,
    image: '/images/banner2.jpg',
    title: 'Get Free Books',
    text: 'Search for free school & college books from verified donors.',
  },
  // {
  //   id: 3,
  //   image: '/images/banner1.jpg',
  //   title: 'Buy or Sell at No Cost',
  //   text: 'Your community-powered platform for book sharing and caring.',
  // },
];

const BannerSlider = () => {
  return (
    <section className="h-screen relative">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-screen bg-cover bg-center flex items-center justify-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10"></div> */}

              {/* Content */}
              <div className="relative z-20 text-center px-4 max-w-2xl">
                <h2 className="text-white text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
                  {slide.title}
                </h2>
                <p className="text-gray-200 text-lg mb-6">{slide.text}</p>
                <div className="flex justify-center gap-4">
                  <a href="#donate" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300">
                    Donate Book
                  </a>
                  <a href="#get-book" className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black rounded-full transition-all duration-300">
                    Get Free Book
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination (optional styling override) */}
      <style>
        {`
          .swiper-pagination-bullets {
            bottom: 20px !important;
          }
          .swiper-pagination-bullet {
            background: white;
            opacity: 0.6;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            transition: all 0.3s ease;
          }
          .swiper-pagination-bullet-active {
            background: #3b82f6;
            transform: scale(1.2);
            opacity: 1;
          }
        `}
      </style>
    </section>
  );
};

export default BannerSlider;
