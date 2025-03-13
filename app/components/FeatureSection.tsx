"use client";

import { motion } from "framer-motion";
import { Clock, DollarSign, Heart, Shield } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "柔軟な勤務時間",
    description: "シフト制で自分のペースで働けます。家族との時間も大切にできます。",
  },
  {
    icon: DollarSign,
    title: "安定した収入",
    description: "経験を積むことで月給35万円以上も可能。充実した待遇で安心して働けます。",
  },
  {
    icon: Shield,
    title: "充実した研修制度",
    description: "未経験でも安心の研修プログラム。プロのドライバーが丁寧に指導します。",
  },
  {
    icon: Heart,
    title: "生涯現役で活躍",
    description: "50代からでも始められる。豊富な人生経験を活かせる仕事です。",
  },
];

export default function FeatureSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            50代からの転職、タクシードライバーの魅力
          </h2>
          <p className="text-xl text-gray-600">
            未経験からでも始められる、やりがいのある仕事です
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-start p-6 bg-gray-50 rounded-xl"
            >
              <div className="flex-shrink-0 p-4 bg-blue-100 rounded-full mr-6">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}