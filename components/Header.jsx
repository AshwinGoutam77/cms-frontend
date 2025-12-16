"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="border-b border-white/10"
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">

                    {/* Logo + Nav */}
                    <div className="flex items-center gap-20">
                        <Link href="/" className="flex items-center gap-2">
                            <img
                                src="https://kpidigital.com/wp-content/uploads/2022/12/kpi-logo-white.svg"
                                alt="logo"
                                width="180"
                                height="40"
                            />
                        </Link>

                        <div className="hidden lg:flex items-center gap-8">
                            {["What We Do", "Who We Are", "Use Cases", "Our Partners", "Resources"].map((item, i) => (
                                <motion.a
                                    key={item}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + i * 0.08 }}
                                    href="#"
                                    className="text-white/90 hover:text-white text-sm"
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Right Side */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center gap-6"
                    >
                        <Link href="#" className="text-white/90 text-sm">
                            Our Divisions
                        </Link>
                        <Link href="#" className="text-white/90 text-sm">
                            FR
                        </Link>
                        <Button className="primary-btn-header">Contact Us</Button>
                    </motion.div>

                </div>
            </div>
        </motion.nav>
    );
}
