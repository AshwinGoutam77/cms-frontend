"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function Header() {
  const [header, setHeader] = useState(null);

  useEffect(() => {
    fetch("https://cms-server-yog6.onrender.com/api/header?populate=*")
      .then((res) => res.json())
      .then((json) => setHeader(json.data));
  }, []);

  if (!header) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-b border-white/10"
    >
      <div className="mx-auto px-10 py-5">
        <div className="flex items-center justify-between">

          {/* LOGO + NAV */}
          <div className="flex items-center gap-20">
            <Link href="/" className="flex items-center gap-2">
              <img
                src={`https://cms-server-yog6.onrender.com${header.Logo.url}`}
                alt="logo"
                width="180"
                height="40"
              />
            </Link>

            {/* MAIN NAV */}
            <div className="hidden lg:flex items-center gap-8">
              {header.navLinks.map((item, i) => (
                <motion.a
                  key={item.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  href={item.url}
                  className="text-white/90 hover:text-white text-sm"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-6"
          >
            {header.rightLinks.map((item) =>
              item.label === "Contact Us" ? (
                <Button key={item.id} className="primary-btn-header">
                  {item.label}
                </Button>
              ) : (
                <Link
                  key={item.id}
                  href={item.url}
                  className="text-white/90 text-sm"
                >
                  {item.label}
                </Link>
              )
            )}
          </motion.div>

        </div>
      </div>
    </motion.nav>
  );
}
