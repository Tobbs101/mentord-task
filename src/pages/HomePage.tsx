"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.section
      className="grid gap-6 sm:gap-8 py-16 sm:py-24"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1
        className="text-3xl sm:text-5xl font-semibold text-[#161616] max-w-2xl leading-tight"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        Discover timeless essentials.
      </motion.h1>
      <motion.p
        className="text-sm sm:text-base max-w-xl text-[#161616]/80"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Browse a curated selection from the Fake Store API. Add items to your
        cart and check out when you are ready.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          href="/products"
          className="inline-block bg-[#161616] text-white px-5 py-3 text-sm rounded hover:opacity-90"
        >
          View Products
        </Link>
      </motion.div>
    </motion.section>
  );
}
