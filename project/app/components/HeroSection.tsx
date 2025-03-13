"use client";

import { motion } from "framer-motion";
import { CarTaxiFront as Taxi } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-16 bg-sky-50 flex items-center">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            あなたの新しいキャリア、
            <br />
            <span className="text-blue-600">タクシードライバー</span>
            として始めよう
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            経験不問・充実した研修制度・安定した収入
            <br />
            あなたの人生経験を活かせる仕事です
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg font-semibold h-auto">
              無料相談を予約する
            </Button>
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-full flex justify-center md:justify-end"
        >
          <div className="relative w-full md:w-[500px] h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1"
              alt="夜の街を走る日本のタクシー"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-0 left-0 right-0 bg-white py-6 shadow-md"
      >
        <div className="container mx-auto px-6 flex flex-wrap justify-center md:justify-around items-center gap-6">
          <InfoCard icon={<Taxi className="w-8 h-8 text-yellow-500" />} title="研修制度充実" desc="未経験でも安心" />
          <InfoCard icon={<Taxi className="w-8 h-8 text-yellow-500" />} title="安定収入" desc="月給35万円以上可能" />
          <InfoCard icon={<Taxi className="w-8 h-8 text-yellow-500" />} title="働き方自由" desc="シフト制で柔軟に" />
        </div>
      </motion.div>
    </section>
  );
}

function InfoCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-center space-x-3">
      {icon}
      <div>
        <p className="font-semibold text-gray-900">{title}</p>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}