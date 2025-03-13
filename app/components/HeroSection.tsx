"use client";

import { motion } from "framer-motion";
import { Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#6ABED0] text-white py-4 z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">TaxiCareer</h1>
          <a href="tel:0120-XXX-XXX" className="flex items-center space-x-2">
            <Phone className="w-5 h-5" />
            <span className="text-lg font-semibold">0120-XXX-XXX</span>
          </a>
        </div>
      </header>

      {/* Hero Content */}
      <div className="container mx-auto px-6">
        <div className="min-h-screen flex flex-col">
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl pt-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-8 leading-tight">
                あなたの新しいキャリア、
                <br />
                <span className="text-[#6ABED0]">タクシードライバー</span>
                <br />
                として始めよう
              </h2>
              <p className="text-lg md:text-xl text-[#333333] mb-10 leading-relaxed">
                経験不問・充実した研修制度・安定した収入
                <br />
                あなたの人生経験を活かせる仕事です
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-[#D50000] hover:bg-red-700 text-white px-10 py-7 rounded-full text-lg font-semibold h-auto shadow-lg">
                  無料相談を予約する
                </Button>
              </motion.div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full h-full flex justify-center lg:justify-end items-center pt-16"
            >
              <div className="relative w-full lg:w-[600px] h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <Image
                  src="/images/hero-taxi.jpg"
                  alt="夜の繁華街を走る黒いタクシー"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  priority
                  className="rounded-2xl"
                />
              </div>
            </motion.div>
          </div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#6ABED0] py-12 rounded-t-3xl shadow-lg mt-auto"
          >
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                  title="経験不問"
                  description="充実した研修制度で安心スタート"
                />
                <FeatureCard
                  title="安定収入"
                  description="月給35万円以上可能"
                />
                <FeatureCard
                  title="柔軟な働き方"
                  description="シフト制で自分らしく働ける"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg flex items-start space-x-4 hover:transform hover:scale-105 transition-transform duration-300">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-[#FFF100] flex items-center justify-center">
          <CheckCircle className="w-7 h-7 text-[#333333]" />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-[#000000] mb-2">{title}</h3>
        <p className="text-[#333333]">{description}</p>
      </div>
    </div>
  );
}