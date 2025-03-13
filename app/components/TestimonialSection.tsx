"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "田中 健一",
    age: 55,
    role: "タクシードライバー歴2年",
    quote: "50代での転職は不安でしたが、充実した研修のおかげで安心してスタートできました。今では生き生きと働いています。",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
  },
  {
    name: "鈴木 真理",
    age: 53,
    role: "タクシードライバー歴1年",
    quote: "お客様との会話が楽しく、毎日が新しい発見です。人生経験を活かせる仕事に出会えて本当に良かったです。",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
  },
];

export default function TestimonialSection() {
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
            先輩ドライバーの声
          </h2>
          <p className="text-xl text-gray-600">
            50代からでも活躍できる、やりがいのある仕事です
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="md:w-1/2">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                  <Quote className="absolute -bottom-6 -right-6 w-12 h-12 text-blue-600 bg-white rounded-full p-2 shadow-lg" />
                </div>
              </div>
              <div className="md:w-1/2">
                <blockquote className="text-lg text-gray-700 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600">
                    {testimonial.age}歳 / {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}