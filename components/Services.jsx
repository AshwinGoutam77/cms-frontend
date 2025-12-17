"use client";

import {
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
  motion,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Services() {
  const sectionRef = useRef(null);
  const [services, setServices] = useState([]);
  const [activeIndex, setActiveIndex] = useState(1);
  const [mounted, setMounted] = useState(false); // 🔑 KEY FIX

  // ✅ Ensure hydration first
  useEffect(() => {
    setMounted(true);
  }, []);

  // FETCH STRAPI DATA
  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/servicess?populate[item][populate]=icon&sort=item.order:asc`
    )
      .then((res) => res.json())
      .then((res) => setServices(res.data.item))
      .catch(console.error);
  }, []);

  // 🚫 Don't run scroll logic until mounted
  const { scrollYProgress } = useScroll(
    mounted && sectionRef.current
      ? {
          target: sectionRef,
          offset: ["start start", "end end"],
        }
      : {}
  );

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!services.length) return;

    const segment = 1 / services.length;
    const index = Math.min(
      services.length - 1,
      Math.floor((v + segment / 2) / segment)
    );

    setActiveIndex((prev) => (prev !== index ? index : prev));
  });

  if (!mounted || !services.length) return null;

  const active = services[activeIndex];
  const iconUrl =
    process.env.NEXT_PUBLIC_STRAPI_URL + active.icon.url;

  return (
    <section ref={sectionRef} className="relative h-[600vh]">
      <div className="sticky top-0 h-screen flex items-center">
        <div className="container max-w-6xl mx-auto grid grid-cols-2 gap-40">

          {/* INDICATORS */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            {services.map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-10 rounded-full"
                animate={{
                  backgroundColor:
                    i === activeIndex
                      ? "rgb(34,211,238)"
                      : "rgba(255,255,255,0.2)",
                  scale: i === activeIndex ? 1.1 : 1,
                }}
                transition={{ duration: 0.4 }}
              />
            ))}
          </div>

          {/* ICON */}
          <div className="flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={iconUrl}
                src={iconUrl}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="w-[300px]"
              />
            </AnimatePresence>
          </div>

          {/* TEXT */}
          <div className="flex flex-col justify-center gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
              >
                <h4 className="text-white text-[50px] font-bold">
                  {active.title}
                </h4>

                <p className="text-white text-[22px] leading-relaxed">
                  {active.desc}
                </p>

                {active.link && (
                  <a href={active.link} className="secondary-btn w-fit mt-5 block cursor-pointer">
                    Learn More
                  </a>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
