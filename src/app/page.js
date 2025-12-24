"use client";

import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function TypingEffect({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval); // stop ketika selesai
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayedText}</span>;
}
export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white antialiased">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/30 backdrop-blur-md border-b border-slate-800/30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/favicon.jpeg"
              alt="XPOKE Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <h1 className="font-extrabold text-xl text-orange-400 drop-shadow-[0_0_10px_rgba(255,140,0,0.6)]">
              NARUTO
            </h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Twitter/X */}
            <a
              href="https://x.com/i/communities/2003806756976369702"
              aria-label="Twitter"
              className="p-2 rounded-lg hover:bg-slate-800/40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.25l-5.214-6.82-5.97 6.82H1.757l7.73-8.84L1.25 2.25h7.058l4.713 6.231 5.223-6.231zm-1.162 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Telegram */}
            <a
              href="https://gmgn.ai/sol/token/ATQ1GtoGdBzBCGRAHa89vXdwDE3G3WCb92hcQ4c8pump"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="buy"
            >
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-lg font-bold shadow-[0_0_25px_rgba(255,100,0,0.7)] hover:scale-110 transition-transform">
                Buy
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center">
        {/* Background image */}
        <Image
          src="/photo_2025-12-24 20.14.50.jpeg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90"></div>

        {/* Text content */}
        {/* Text content */}
        <div className="relative z-10 max-w-3xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            Everyone Loves{" "}
            <span className="text-orange-400 drop-shadow-[0_0_15px_rgba(255,140,0,0.8)]">
              $NARUTO
            </span>
          </motion.h2>
          <p className="text-lg md:text-xl mb-8 italic text-slate-200">
            “If you wait me to give up, so you will be waiting forever.”
            <br />— <span className="text-orange-400">Uzumaki Naruto</span>
          </p>

          {/* Contract Address */}
          <div className="inline-flex items-center gap-2 bg-black/60 border border-orange-500/30 px-4 py-2 rounded-xl mb-6 shadow-[0_0_20px_rgba(255,140,0,0.3)]">
            <span className="text-sm text-orange-400 font-semibold">CA</span>
            <span className="text-sm md:text-base text-white font-mono break-all">
              -
            </span>
          </div>

          <br />
          {/* Buy Button */}
          <a
            href="https://gmgn.ai/sol/token/ATQ1GtoGdBzBCGRAHa89vXdwDE3G3WCb92hcQ4c8pump"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-lg font-bold shadow-[0_0_25px_rgba(255,100,0,0.7)] hover:scale-110 transition-transform">
              BUY $NARUTO
            </button>
          </a>
        </div>
      </section>

      {/* PROMO / SINGLE IMAGE SECTION */}
      <section className="relative w-full py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
            <span className="text-orange-400">Naruto</span> is the{" "}
            <span className="text-white">TRUE GOAT 🦊</span>
          </h2>

          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/promo.png"
              alt="Convictions Promo"
              width={1200}
              height={600}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="relative w-full py-20">
        {" "}
        <div className="max-w-5xl mx-auto px-6">
          {" "}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            {" "}
            <video
              src="/anime.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-cover"
            />{" "}
          </div>{" "}
        </div>{" "}
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-12 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">
            © 2025 Naruto. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-400 text-sm">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
