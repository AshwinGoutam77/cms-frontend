"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export default function UseCasesSliderClient({ heading, desc, cards }) {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-[#071a2b] pt-24 pb-16 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-6"
        >
          <h2 className="text-[40px] font-semibold">{heading}</h2>
          <p className="text-[18px] mt-6 opacity-90">{desc}</p>
        </motion.div>
      </section>

      {/* ================= SLIDER ================= */}
      <section className="py-24 pt-0 max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {cards.map((item, index) => {
            const imageUrl =
              item.image?.formats?.medium?.url || item.image?.url;

            return (
              <SwiperSlide key={item.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg h-full min-h-[530px]"
                >
                  {/* IMAGE */}
                  {imageUrl && (
                    <img
                      src={`${STRAPI_URL}${imageUrl}`}
                      alt={item.heading}
                      className="w-full h-[220px] object-cover"
                    />
                  )}

                  {/* CONTENT */}
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-4">
                      {item.heading}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.subheading}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="
              px-8 py-4 rounded-full
              bg-gradient-to-r from-cyan-400 to-blue-500
              text-white font-medium
              shadow-lg
            "
          >
            Browse All Use Cases
          </motion.button>
        </motion.div>
      </section>
    </>
  );
}
