"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import CountUp from "react-countup";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

/* ---------------- COUNTER ---------------- */

function StatCounter({ value, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref}>
      <h3 className="text-[55px] font-[500]">
        {isInView && <CountUp end={Number(value)} duration={2} />}{" "}
        <span className="color-text font-[600]">+</span>
      </h3>
      <p className="text-[18px]">{label}</p>
    </div>
  );
}

export default function Stats() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `${STRAPI_URL}/api/statss?populate[counters]=*&populate[cases][populate]=image&populate=cta`
    )
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .catch(console.error);
  }, []);

  if (!data) return null;

  return (
    <>
      {/* ---------------- STATS SECTION ---------------- */}
      <motion.section
        className="container mx-auto text-white mb-40 border-b border-[#ccc9] pb-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 className="text-[40px] text-center font-bold">
          {data.heading}
        </motion.h2>

        <motion.p className="text-[18px] text-center mt-3">
          {data.desc}
        </motion.p>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center my-10">
          {data.counters.map((item) => (
            <StatCounter key={item.id} value={item.value} label={item.label} />
          ))}
        </div>

        {data.ctaText && (
          <div className="text-center mt-5">
            <button className="secondary-btn">{data.ctaText}</button>
          </div>
        )}
      </motion.section>

      {/* ---------------- CONTENT SPLIT SECTION ---------------- */}
      {data.cta && (
        <motion.section
          className="container mx-auto max-w-6xl text-white mb-40"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="flex justify-between gap-20">
            <motion.h2 className="text-[40px]">{data.cta.heading}</motion.h2>

            <motion.div className="w-[50%]">
              <p className="text-[18px]">{data.cta.desc}</p>

              <button className="secondary-btn mt-8">{data.cta.cta}</button>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* ---------------- SLIDER SECTION ---------------- */}
      <section className="relative py-24 pt-0">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1.2}
          centeredSlides
          initialSlide={1}
          spaceBetween={40}
          pagination={{ clickable: true }}
          breakpoints={{ 1024: { slidesPerView: 1.5 } }}
        >
          {data.cases.map((slide) => (
            <SwiperSlide key={slide.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-[520px] rounded-xl overflow-hidden"
              >
                <img
                  src={`${STRAPI_URL}${slide.image.url}`}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-10">
                  <h3 className="text-white text-3xl md:text-4xl font-semibold max-w-3xl leading-tight">
                    {slide.title}
                  </h3>

                  {slide.link && (
                    <a href={slide.link} className="mt-8 text-sm font-medium">
                      Read the case study →
                    </a>
                  )}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ---------------- CTA SECTION ---------------- */}
        <motion.section
          className="
          bg-[url('https://kpidigital.com/wp-content/uploads/2023/01/Group-13886-1.png')]
          bg-cover bg-no-repeat py-20 pt-20
        "
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-6 text-center text-white">
            <h2 className="text-[35px] font-bold mb-10">
              Your transformation journey starts now.
              <span className="block font-normal">Are you ready?</span>
            </h2>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="primary-btn text-lg py-4"
            >
              Talk to an expert
            </motion.button>
          </div>
        </motion.section>
      </section>
    </>
  );
}
