"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const textReveal = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const buttonReveal = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.6,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* ------------------ COMPONENT ------------------ */

export default function Hero() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/hero?populate=*`)
      .then((res) => res.json())
      .then((data) => setHero(data?.data))
      .catch(console.error);
  }, []);

  console.log(hero);
  
  if (!hero) return null;

  const videoUrl =
    process.env.NEXT_PUBLIC_STRAPI_URL + hero?.heroVideo?.url;
  return (
    <section className="relative mx-auto min-h-screen overflow-hidden bg-[#071a2b]">
      {/* VIDEO: START CENTER, MOVE RIGHT */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[620px] h-[620px] -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden z-0"
        initial={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
        animate={{ opacity: 1, scale: 1, x: "20vw" }} // move right inside hero
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1 }}
      >
        <video
          className="w-full h-full object-cover"
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
        />
      </motion.div>

      {/* PAGE CONTENT */}
      <div className="container mx-auto px-6 py-32 min-h-screen flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 items-center w-full">
          {/* LEFT TEXT */}
          <motion.div
            variants={textReveal}
            initial="hidden"
            animate="show"
            className="max-w-xl"
          >
            <h1 className="text-5xl xl:text-[60px] font-bold leading-[68px] bg-gradient-to-r from-[#00d4ff] via-[#0099ff] to-[#0066ff] bg-clip-text text-transparent">
              {hero.heading}
            </h1>

            <p className="mt-6 text-lg text-white/80">{hero.description?.[0]?.children?.[0]?.text}</p>

            <motion.div
              variants={buttonReveal}
              initial="hidden"
              animate="show"
              className="mt-10"
            >
              <Button className="primary-btn"> {hero.ctaText}</Button>
            </motion.div>
          </motion.div>

          <div />
        </div>
      </div>
    </section>
  );
}
