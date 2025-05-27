import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import "../styles/trophy.css";
import TrophyBG from "../assets/images/trophy_bg.jpg"; // Left side background
import Certificate1 from "../assets/images/certi1.jpg";
import Certificate2 from "../assets/images/certi2.jpg";

const certificates = [
  { id: 1, img: Certificate1, title: "Certificate 1" },
  { id: 2, img: Certificate2, title: "Certificate 2" },
  { id: 3, img: Certificate2, title: "Certificate 3" },

];

const Trophy = () => {
  return (
    <div className="trophy-container text-center">
      {/* Title Section */}
      <h2 className="section-title hero-text ">🏆 Achievements</h2>
      <p className="section-subtitle hero-text">Our proud moments & certificates</p>

      {/* Two-Side Layout (Left: BG Image | Right: Swiper) */}
      <div className="trophy-content">
        {/* Left Side - Background Image */}
        <div className="trophy-left">
          <img src={TrophyBG} alt="Trophy Background" className="trophy-bg-image" />
        </div>

        {/* Right Side - Swiper (Certificates) */}
        <div className="trophy-right">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 0,
              stretch: 50,
              depth: 120,
              modifier: 1.2,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            className="swiper"
          >
            {certificates.map((cert) => (
              <SwiperSlide key={cert.id} className="swiper-slide">
                <div className="trophy-card">
                  <img src={cert.img} alt={cert.title} className="swiper-image" />
                  <p className="trophy-title">{cert.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Trophy;
